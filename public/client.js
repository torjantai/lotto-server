const submitButton = $('#submit');

submitButton.on('click', (e) => {
    //e.preventDefault();
    submitButton.val('Simulating');
    let dots = 'Simulating';
    setInterval(() => {
        dots += '...'
        submitButton.val(dots);
    }, 500);

});
