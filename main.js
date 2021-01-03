
    $('#cvc').on('focus', function () {
        $('.card').toggleClass('flipped');
    });

    $('#cvc').on('blur', function () {
        $('.card').toggleClass('flipped');
    });

    $('#cardNumber').keydown(function (event) {
        $(this).val(function (index, value) {
            if(event.key === "Backspace"){
                return value
            }
            if (value.length >= 19) {
                return value.slice(0, 15 + 4)
            }
            return value.replace(/[^0-9\ ]/g, '').replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
        });
    });

    $('#cardNumber').keyup(function () {
        this.value = this.value.replace(/[^0-9\ ]/g, '');
        var value = this.value;
        value = value.replace(/\ /gi, "")
        let maskedValue = new Array(17 - value.length).join("*");
        maskedValue = value + maskedValue;
        maskedValue = maskedValue.replace(/(.{4})/g, '$1 ')
        $('.cardNumberText').html(maskedValue)
    });

    $('#name').keyup(function () {
        $('.userName').html(this.value.length ? this.value : 'Your Name')
    });

    $('#cvc').keyup(function () {
        $(this).val(function (index, value) {
            return value.replace(/[^0-9\ ]/g, '')
        })
        $('.cvcField').html(this.value.length ? this.value : '***')
    });

    function expiryDateHandle(event) {
        let dateData = event.target.value.split("-");
        let month = dateData[1];
        let year = dateData[0].slice(-2);
        $('#expiryDateText').html(`${month ? month : '--'}/${year ? year : '--'}`)
    }
