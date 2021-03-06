import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <div className="h-screen text-center bg-white mb-6 p-4 shadow-xl">
            <div id="sorting-algo-container" className="mb-12">
                <div className="border-gray-100 w-full rounded-sm border-2 mb-2 shadow-xl">
                    Sorting Algorithms
                </div>
                <button className="bg-white w-full mb-2 rounded-md hover:bg-gray-100">
                    <Link to="/merge-sort">Merge Sort</Link>
                </button>
                <button className="bg-white w-full mb-2 rounded-md hover:bg-gray-100">
                    <Link to="/quick-sort">Quick Sort</Link>
                </button>
                <button className="bg-white w-full mb-2 rounded-md hover:bg-gray-100">
                    <Link to="/bubble-sort">Bubble Sort</Link>
                </button>
            </div>
            <div id="data-structures-container" className="mb-12">
                <div className="border-gray-100 w-full rounded-sm border-2 mb-2  shadow-xl">
                    Data Structures     
                </div>
                <button className="bg-white w-full mb-2 rounded-md hover:bg-gray-100">
                    <Link to="/linked-list">Singly Linked List</Link>
                </button>
                <button className="bg-white w-full mb-2 rounded-md hover:bg-gray-100">
                    <Link to="/binary-tree">Binary Tree</Link>
                </button>
            </div>
            <div id="path-finding-container" className="mb-12">
                <div className="border-gray-100 w-full rounded-sm border-2 mb-2  shadow-xl">
                    Pathfinding Algorithms
                </div>
            </div>
            <button className="bg-white w-full rounded-md hover:bg-gray-100">
                <Link to="/multiple-pointers">Multiple pointers</Link>
            </button>
        </div>
    )
}

export default Navbar
