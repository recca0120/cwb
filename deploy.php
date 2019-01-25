<?php

namespace Deployer;

require 'recipe/laravel.php';
require 'recipe/rsync.php';

// Project name
set('application', 'cwb');

// Project repository
// set('repository', 'git:cwb.git');

// [Optional] Allocate tty for git clone. Default value is false.
set('git_tty', true);

// Shared files/dirs between deploys
add('shared_files', [
    'database/database.sqlite',
]);
add('shared_dirs', []);

// Writable dirs by web server
add('writable_dirs', []);

set('http_user', 'www-data');

// rsync
set('keep_releases', 1);
set('rsync', [
    'exclude' => [
        '.git',
        '.idea',
        '.env',
        'frontend',
        'node_modules',
        'resources/cwb-vab',
        'storage/app/sound/',
        'storage/logs/*',
        'deploy.php',
        'vendor',
    ],
    'exclude-file' => false,
    'include' => [],
    'include-file' => false,
    'filter' => [],
    'filter-file' => false,
    'filter-perdir' => false,
    'flags' => 'rz', // Recursive, with compress
    'options' => ['delete'],
    'timeout' => 600,
]);

// Hosts
host('prod')
    ->hostname('52.194.145.196')
    ->user('artwar')
    ->identityFile('~/.ssh/recca0120-aws.pem')
    ->set('deploy_path', '~/web/cwb.artwar.com.tw')
    ->set('rsync_src', __DIR__)
    ->set('rsync_dest', '{{release_path}}');

// Tasks

task('build', function () {
    run('cd {{release_path}} && build');
});

// [Optional] if deploy fails automatically unlock.
after('deploy:failed', 'deploy:unlock');

// Migrate database before symlink new release.

before('deploy:symlink', 'artisan:migrate');

desc('Deploy your project');
task('deploy', [
    'deploy:info',
    'deploy:prepare',
    'deploy:lock',
    'deploy:release',
    'rsync:warmup',
    'rsync',
    'deploy:shared',
    'deploy:vendors',
    'deploy:writable',
    'artisan:storage:link',
    'artisan:view:clear',
    'artisan:config:cache',
    'artisan:optimize',
    'deploy:symlink',
    'deploy:unlock',
    'cleanup',
]);
