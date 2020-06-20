<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\CartItem;

class CartItemController extends Controller
{


    public function getItemsByCart($cart_id){
        $items = CartItem::where('cart_id', $cart_id)->get();
        return $items->toJson();
    }

    

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        //create the post using Post Model
        // CartItem::create([
        //     'color' => $request->color,
        //   'size' => $request->size,
        //   'cart_id' => $request->cart_id,
        //   'product_id' => $request->product_id
        // ]);
        
        $cart_item = new CartItem();
        $cart_item->color = $request->input('color');
        $cart_item->size = $request->input('size');
        $cart_item->cart_id = $request->input('cart_id');
        $cart_item->product_id = $request->input('product_id');
        // Log::debug('request ========== ' . $request);
    	$cart_item->save();

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
