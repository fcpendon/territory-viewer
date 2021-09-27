<?php

namespace App\Models;

use Illuminate\Support\Facades\Http;

class TerritoryTree
{
    public $data;

    public function fetchTerritories()
    {
        $response = Http::get('https://netzwelt-devtest.azurewebsites.net/Territories/All');
        $result = $response->json();

        return $result['data'];
    }

    function build($nodes, $parent_id = null)
    {
        $branch = array();

        foreach ($nodes as &$node) {
            if ($node['parent'] == $parent_id) {
                $branch[$node['id']]['name'] = $node['name'];

                $children = $this->build($nodes, $node['id']);
                if ($children) {
                    $branch[$node['id']]['children'] = $children;
                }

                unset($node);
            }
        }
    
        return $branch;
    }
}
