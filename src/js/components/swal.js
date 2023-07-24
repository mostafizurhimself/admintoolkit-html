import Swal from 'sweetalert2';

const swalModal = {

    modalSwals: document.querySelector('.SweetAlert2'),
    modalform : document.querySelector('#delete-form' ),
     
    init() {
        this.initItems();
    },
    initItems() {
        const buttons = document.querySelectorAll('.SweetAlert2');
        buttons.forEach((button) => {
            button.addEventListener('click', (e) => this.confirmDelete(e));
        });
    },

    confirmDelete(event) {
       event.preventDefault();
       const button = event.target;
       
        Swal.fire({
          //  title: 'Are you sure?',
            text: 'Are you sure you want to delete?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#f4405f',
            cancelButtonColor: '#e4e7eb',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, Cancel',
            showCloseButton: true,

        }).then((result) => {
            if (result.isConfirmed) {
                this.modalform.submit();

            }
        });
    }
}
export default swalModal;