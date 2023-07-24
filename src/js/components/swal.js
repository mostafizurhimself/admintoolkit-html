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
            title: 'Are you sure?',
            text: 'You will not be able to recover this data!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                this.modalform.submit();

            }
        });
    }
}
export default swalModal;