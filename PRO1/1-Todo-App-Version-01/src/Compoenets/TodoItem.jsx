import React from 'react';

const TodoItem = () => {
    let todoName = 'Task';
    let todoDate = '04/08/2024';
    return <>
        <ul class="divide-y divide-gray-200">
            <li class="py-3 flex justify-between">
                <div class="flex items-center">
                    <input type="checkbox" class="mr-2"/>
                    <span>{todoName}</span>
                </div>
                <div class="border border-indigo-100 ml-[6vw] py-2 rounded-md">{todoDate}</div>
                <button class="ml-2 px-2 py-2 bg-blue-500 rounded-md text-white hover:bg-red-500">Delete</button>
            </li>
        </ul>
</>
}

export default TodoItem;