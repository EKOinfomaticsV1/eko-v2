import React from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import RetailModal from '../../../assets/third_section/Modal/RetailModal.png'



const ModalShow = ({onOpenModal, onCloseModal, open, setOpen}) => {
  

    return (
      <>
       <div className='bg-black'>
    
      <Modal open={open} onClose={onCloseModal} center classNames={{
          overlay: 'customOverlay',
          modal: 'customModal',
        }}>
       <div className='bg-[#061137] border-[#0074E5] border border-opacity-50 p-5 rounded'>
        <div className='flex flex-col justify-center items-center w-full'>
            <div>
                <h1 className='text-[48px]'>RETAIL</h1>
            </div>
             <div>
                <img src={RetailModal} alt="Retail"  className='w-sm md:w-md lg:w-[20rem]'/>
             </div>
             <div className='flex flex-col justify-center items-center w-[85%]'>
                <h1>Overview</h1>
             <p className='text-center'>
             Retail is the process of selling consumer goods or services to customers through multiple channels of distribution to earn a profit. Retailers satisfy demand identified through a supply chain. The term "retailer" is typically applied where a service provider fills the small orders of a large number of individuals, who are end-users, rather than large orders of a small number of wholesale, corporate or government clientele.

           
             </p>
             <p className='text-center py-5'>
             Shopping generally refers to the act of buying products. Sometimes this is done to obtain final goods, including necessities such as food and clothing; sometimes it takes place as a recreational activity. Recreational shopping often involves window shopping and browsing: it does not always result in a purchase.
      
             </p>
             <div className='flex flex-col justify-center items-center'>
               <div className='flex justify-center items-center gap-2'>
                <div>
                    <div className='w-[0.5rem] h-[0.5rem] bg-white rounded'></div>
                </div>
                <div>Supply Chain Analytics</div>
               </div>
               <div className='flex justify-center items-center gap-2'>
               <div className='w-[0.5rem] h-[0.5rem] bg-white rounded'></div>
                <div>Operational analytics</div>
               </div>
               <div className='flex justify-center items-center gap-2'>
               <div className='w-[0.5rem] h-[0.5rem] bg-white rounded'></div>
                <div>Customer Analytics</div>
               </div>
             </div>


             </div>
        </div>
       </div>
       
   
       
      </Modal>
    </div>
      </>
    );
  };
  
  export default ModalShow;