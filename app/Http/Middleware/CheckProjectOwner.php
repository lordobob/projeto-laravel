<?php

namespace CodeProject\Http\Middleware;

use Closure;
use CodeProject\Services\ProjectService;


class CheckProjectOwner
{
    /**
     * @var ProjectService
     */
    private $service;

    public function __construct(ProjectService $service){

        $this->service = $service;
    }


    /**
     * @param $request
     * @param Closure $next
     * @return array
     */
    public function handle($request, Closure $next)
    {
        $projectId = $request->route('id') ? $request->route('id') : $request->route('project');

        if($this->service->checkProjectOwner($projectId) == false){
            return ['error'=>'Access Forbbiden'];
        }

        return $next($request);
    }
}
