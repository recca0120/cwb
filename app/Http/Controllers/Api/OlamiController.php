<?php

namespace App\Http\Controllers\Api;

use Illuminate\Support\Str;
use Recca0120\Olami\Client;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Support\Facades\Storage;
use App\Services\AudioConverter;

class OlamiController extends Controller
{
    /**
     * @var \Recca0120\Olami\Client
     */
    private $client;

    /**
     * @var \Illuminate\Filesystem\Filesystem
     */
    private $files;

    /**
     * OlamiController constructor.
     *
     * @param \Recca0120\Olami\Client $client
     * @param \Illuminate\Filesystem\Filesystem $files
     */
    public function __construct(Client $client, Filesystem $files)
    {
        $this->client = $client;
        $this->files = $files;
    }

    /**
     * @param \App\Services\AudioConverter $audioConverter
     * @param \Illuminate\Http\Request $request
     *
     * @return mixed|\Psr\Http\Message\ResponseInterface
     * @throws \Http\Client\Exception
     */
    public function query(AudioConverter $audioConverter, Request $request)
    {
        $file = $request->file('sound');

        $sound = Storage::path($file->storePubliclyAs(
            'sound', Str::uuid().'.'.$file->getClientOriginalExtension()
        ));
        
        // $sound = $audioConverter->convert(
        //     Storage::path($file->storePubliclyAs(
        //         'sound',
        //         Str::uuid().'.'.$file->getClientOriginalExtension()
        //     ))
        // );

        app()->terminating(function () use ($sound) {
            $this->files->delete($sound);
        });

        return $this->client->query([
            'api' => 'asr',
            'sound' => $sound,
        ]);
    }

    public function speech(Request $request)
    {
        return $this->client->speech([
            'txt' => $request->get('text'),
        ]);
    }
}
