import React from "react"
import { BiSearch } from 'react-icons/bi';

const Search =() => {
    return (
      <div className="w-full md:w-auto py-1shadow-sm hover:shadow-md transition cursor-pointer hidden sm:block">
      <div className="flex flex-row items-center justify-between">
    
        <div className="items-center text-sm font-medium">
          <div className="flex space-x-4">
            <select className="hidden sm:block h-15 px-6 items-center bg-zinc-500 font-semibold rounded-full p-4 text-white" type="submit">
              <option value="">Seleccione un hotel</option>
            </select>
          </div>
        </div>
    
        <div className="sm:flex space-x-4 items-center text-sm font-medium">
          <div className="hidden sm:flex flex-1 text-center">
            <div className="text-sm font-semibold px-1">
              <div className="grid justify-items-center">
                <h1 className="flex-auto text-lg text-white">
                  ENTRADA
                </h1>
    
                <h1 className="flex-auto text-5xl font-bold text-white">
                  19
                </h1>
                <h1 className="flex-auto text-lg font-bold text-white">
                  DIC 2023
                </h1>
              </div>
            </div>
          </div>
    
          <div className="hidden sm:flex flex-1 text-center">
            <div className="text-sm font-semibold px-1">
              <div>
                <h1 className="flex-auto text-lg text-white">
                  SALIDA
                </h1>
    
                <h1 className="flex-auto text-5xl font-bold text-white">
                  19
                </h1>
                <h1 className="flex-auto text-lg font-bold text-white">
                  DIC 2023
                </h1>
              </div>
            </div>
          </div>
    
          <button className="hidden sm:flex h-15 px-6 items-center bg-zinc-500 font-semibold rounded-full p-4 text-white" type="submit">
            1 Adultos
          </button>
    
          <button className="hidden sm:flex h-15 px-4 items-center bg-zinc-500 font-semibold rounded-full p-4 text-white" type="submit">
            1 niños
          </button>
    
          <input
            type="text"
            name="price"
            id="price"
            className="hidden sm:flex h-15 font-thin bg-neutral-950 items-center border-b-2 border-white placeholder-white"
            placeholder="Código promocional"
          />
    
          <button className="h-15 px-6 items-center font-semibold rounded-full border p-4 text-white" type="submit">
            Reservar ahora
          </button>
        </div>
    
      </div>
    </div>
    
    )
}

export default  Search