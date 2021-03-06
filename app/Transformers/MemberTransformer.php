<?php
/**
 * Created by PhpStorm.
 * User: Lucas
 * Date: 29/10/2015
 * Time: 00:16
 */

namespace CodeProject\Transformers;


use CodeProject\Entities\User;
use League\Fractal\TransformerAbstract;

class MemberTransformer extends TransformerAbstract
{

    /**
     * @param User $o
     * @return array
     */
    public function transform(User $member){
        return [
            'member_id' => $member->id,
            'name' => $member->name,
        ];

    }

}