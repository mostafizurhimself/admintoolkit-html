const modal = {
    init() {
        // Basic Modal Selector
        const modalToogle = document.querySelector('.basic-modal-toogle');
        const modal = document.querySelector('.basic-modal');
        const closeModal = document.querySelector('.close-modal');
        const doneModal = document.querySelector('.done-modal')

        // Small Modal Selector
        const smallModalToogle = document.querySelector('.sm-modal-toogle');
        const smallModal = document.querySelector('.small-modal');
        const smallCloseModal = document.querySelector('.sm-close-modal');
        const smallDoneModal = document.querySelector('.sm-done-modal');

        //Large Modal Selector
       

        modalToogle.addEventListener('click', function () {
            modal.classList.remove('hidden')
            
        });

        closeModal.addEventListener('click', function() {
            modal.classList.add('hidden');
        });

        doneModal.addEventListener('click', function() {
            modal.classList.add('hidden');
        });

        // Small Toogle
        smallModalToogle.addEventListener('click', function() {
            smallModal.classList.remove('hidden');
        });

        smallCloseModal.addEventListener('click', function() {
            smallModal.classList.add('hidden');
        });

        smallDoneModal.addEventListener('click', function() {
            smallModal.classList.add('hidden');
        });
    }
};

export default modal;