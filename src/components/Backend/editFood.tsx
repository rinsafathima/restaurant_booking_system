import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { toast } from 'sonner';
import axios from 'axios';
import { useEffect } from 'react';

interface EditFoodProps {
  id: string;
  name: string;
  price: number;
  image: string;
  categoryId: string;
  onUpdate: () => void;
}

interface Category {
  id: string;
  name: string;
  slug: string;
}

const EditFood: React.FC<EditFoodProps> = ({ id, name, price, categoryId, image, onUpdate }) => {

  const [isOpen, setIsOpen] = useState(false);
  const [updatedName, setUpdatedName] = useState(name);
  const [updateprice, setUpdateprice] = useState(price);
  const [updatedCategoryId, setUpdatedCategoryId] = useState(categoryId);
  const [updatedImage, setUpdatedImage] = useState(image);
  const [categories, setCategories] = useState<Category[]>([]);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const body = { name: updatedName, price: updateprice, categoryId: updatedCategoryId, image: updatedImage };
      await fetch(`/api/food/put?id=${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      toast.success('Dish updated successfully');
      onUpdate();
      closeModal();
    } catch (error) {
      toast.error('Error updating dish');
    }
  };

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios.get(`/api/category/get`);
        const data = await response.data;
        setCategories(data);
      } catch (error) {
        toast.error('Error loading categories');
      }
    };
    getCategories();
  }, [])


  return (
    <>
      <button className="text-green-500 mr-4" onClick={openModal}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
        </svg>
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >

                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Edit dish
                  </Dialog.Title>
                  <form onSubmit={handleSubmit} className="mt-4">
                    <label className="block mb-3">
                      Name:
                      <input
                        type="text"
                        value={updatedName}
                        onChange={(e) => setUpdatedName(e.target.value)}
                        className="mt-1 block w-full rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-green-300"
                      />
                    </label>
                    <label className="block mb-3">
                      Price:
                      <input
                        type="number"
                        value={updateprice}
                        onChange={(e) => setUpdateprice(Number(e.target.value))}

                        className="mt-1 block w-full rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-green-300"
                      />
                    </label>
                    <label className="block mb-3">
                      Image:
                      <input
                        type="text"
                        value={updatedImage}
                        onChange={(e) => setUpdatedImage(e.target.value)}
                        className="mt-1 block w-full rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-green-300"
                      />
                    </label>

                    <label className="block mb-3">
                      Category:
                      <select
                        value={updatedCategoryId}
                        onChange={(e) => setUpdatedCategoryId(e.target.value)}
                        className="mt-1 block w-full rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-green-300"
                      >
                        {categories.map((category) => (
                          <option key={category.id} value={category.id}>
                            {category.name}
                          </option>
                        ))}
                      </select>
                    </label>
                    <div className="mt-4">
                      <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-5 py-2.5 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 mr-2"
                      >
                        Save
                      </button>
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-5 py-2.5 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default EditFood;
