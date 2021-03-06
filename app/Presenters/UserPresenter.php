<?php
/**
 * Created by PhpStorm.
 * User: Lucas
 * Date: 27/10/2015
 * Time: 14:26
 */

namespace CodeProject\Presenters;
use CodeProject\Transformers\ProjectTransformer;
use CodeProject\Transformers\UserTransformer;
use Prettus\Repository\Presenter\FractalPresenter;

class UserPresenter extends FractalPresenter
{

    public function getTransformer()
    {

        return new UserTransformer();

    }

}