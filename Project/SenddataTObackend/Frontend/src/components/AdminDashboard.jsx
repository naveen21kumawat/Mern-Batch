import React, { useState, useEffect } from 'react'
import { useContext } from 'react'
import axios from 'axios'
import { userContext } from '../Context/ContextProvide'

function AdminDashboard() {
    const { allusers ,loading,setloading} = useContext(userContext)



    const [filteredUsers, setFilteredUsers] = useState([])


    const [showDeleteDialog, setShowDeleteDialog] = useState(false)
    const [userToDelete, setUserToDelete] = useState(null)

    useEffect(() => {
        setFilteredUsers(allusers.filter((user) => user.role === "user"))
    }, [allusers])

    console.log(filteredUsers)



    const openDeleteDialog = (user) => {
        setUserToDelete(user)
        setShowDeleteDialog(true)
    }

    const closeDeleteDialog = () => {
        setShowDeleteDialog(false)
        setUserToDelete(null)
    }

    const confirmDelete = async () => {
        if (userToDelete) {
            console.log("Delete User", userToDelete._id)
            // const deletedUser = await axios.delete(`/api/user/deleteuser/${userToDelete._id}`)
            // console.log("Deleted User", deletedUser)
            setFilteredUsers(filteredUsers.filter((user) => user._id !== userToDelete._id))
            closeDeleteDialog()
        }
    }

  


    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className='text-center text-3xl font-bold text-gray-800 mb-8'>Manage Users</div>
            <div className='flex justify-center'>
                <div className="w-full max-w-6xl overflow-hidden rounded-2xl border border-gray-300 shadow-lg">
                    <table className='w-full border-collapse'>
                        <thead>
                            <tr className='bg-blue-700 text-white'>
                                <th className='p-4 text-left border-r border-blue-600 font-semibold'>Name</th>
                                <th className='p-4 text-left border-r border-blue-600 font-semibold'>Email</th>
                                <th className='p-4 text-left font-semibold border-1 border-blue-600'>Role</th>
                                <th className='p-4 text-left font-semibold'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                           {loading && (
                            <tr>
                                <td colSpan={4} className='p-4 text-center text-gray-600'>Loading...</td>
                            </tr>
                           )}
                            {
                               !loading && filteredUsers.length === 0 && (
                                    <tr>
                                        <td colSpan={4} className='p-4 text-center text-gray-600'>No users found</td>
                                    </tr>
                                )
                            }
                            {
                                filteredUsers.map((user, index) => {
                                    return (
                                        <tr key={user._id || index} className='bg-white hover:bg-gray-50 transition-colors border-b border-gray-200 last:border-b-0'>
                                            <td className='p-4 border-r border-gray-200 text-gray-800'>{user.name}</td>
                                            <td className='p-4 border-r border-gray-200 text-gray-600'>{user.email}</td>
                                            <td className='p-4 border-r border-gray-200'>
                                                <span className={`px-3 py-1 rounded-full text-sm font-medium ${user.role === 'admin'
                                                    ? 'bg-red-100 text-red-800'
                                                    : 'bg-green-100 text-green-800'
                                                    }`}>
                                                    {user.role}
                                                </span>
                                            </td>
                                            <td className='p-4 ' >
                                                <button 
                                                    className='bg-red-600 hover:bg-red-700 text-white px-3 py-1 m-1 rounded-md transition-colors' 
                                                    onClick={() => openDeleteDialog(user)}
                                                >
                                                    Delete
                                                </button>
                                                <button className='bg-green-600 hover:bg-green-700 text-white px-3 py-1 m-1 rounded-md transition-colors'>
                                                    Update
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Delete Confirmation Dialog */}
            {showDeleteDialog && (
                <div className="fixed inset-0  backdrop-blur-sm flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full mx-4">
                        <div className="flex items-center mb-4">
                            <div className="flex-shrink-0">
                                <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                                </svg>
                            </div>
                            <div className="ml-3">
                                <h3 className="text-lg font-medium text-gray-900">Delete User</h3>
                            </div>
                        </div>
                        
                        <div className="mb-6">
                            <p className="text-sm text-gray-600">
                                Are you sure you want to delete <span className="font-semibold text-gray-900">{userToDelete?.name}</span>? 
                                This action cannot be undone.
                            </p>
                            <div className="mt-3 p-3 bg-gray-50 rounded-md">
                                <p className="text-sm text-gray-700">
                                    <span className="font-medium">Email:</span> {userToDelete?.email}
                                </p>
                                <p className="text-sm text-gray-700">
                                    <span className="font-medium">Role:</span> {userToDelete?.role}
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-end space-x-3">
                            <button
                                onClick={closeDeleteDialog}
                                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={confirmDelete}
                                className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-md transition-colors"
                            >
                                Delete User
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AdminDashboard