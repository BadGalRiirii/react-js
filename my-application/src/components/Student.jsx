import React, { Component } from 'react'

export class Students extends Component {
  render() {
    return (
        <main className="flex-1 bg-gray-100 p-8">
            <h2 className="text-2xl text-center justify-center font-semibold mb-4">Students Portal</h2>
            <p className='text-center justify-center'>Welcome to Students Portal</p>
            <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Id</th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Email</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">2022302442</td>
                    <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">Rulain Rehanna</td>
                    <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">Ruilan.r@gmail.com</td>
                  </tr>
                
                </tbody>
              </table>
        </main>
    )
  }
}

export default Students