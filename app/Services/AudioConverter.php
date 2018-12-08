<?php
/**
 * Created by PhpStorm.
 * User: recca0120
 * Date: 2018/11/16
 * Time: 8:50 AM.
 */

namespace App\Services;

use Illuminate\Filesystem\Filesystem;
use Symfony\Component\Process\Process;
use Symfony\Component\Process\ExecutableFinder;

class AudioConverter
{
    /**
     * @var \Symfony\Component\Process\ExecutableFinder
     */
    private $executableFinder;
    /**
     * @var \Illuminate\Filesystem\Filesystem
     */
    private $files;

    /**
     * AudioConverter constructor.
     *
     * @param \Symfony\Component\Process\ExecutableFinder $executableFinder
     * @param \Illuminate\Filesystem\Filesystem $files
     */
    public function __construct(ExecutableFinder $executableFinder, Filesystem $files)
    {
        $this->executableFinder = $executableFinder;
        $this->files = $files;
    }

    /**
     * @param string $source
     *
     * @return string
     */
    public function convert($source)
    {
        $binary = $this->executableFinder->find('ffmpeg', '/usr/bin/ffmpeg', [
            '/usr/bin',
            '/usr/local/bin',
        ]);

        if (empty($binary) === true) {
            return $source;
        }

        $extension = pathinfo($source, PATHINFO_EXTENSION);
        $target = str_replace('.'.$extension, '-target.'.$extension, $source);
        $process = new Process([
            $binary,
            '-i',
            $source,
            '-acodec',
            'pcm_s16le',
            '-ar',
            '16000',
            '-ac',
            '1',
            '-y',
            $target,
        ]);
        $process->mustRun();
        $this->files->delete($source);

        return $target;
    }
}
