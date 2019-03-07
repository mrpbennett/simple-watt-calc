$(document).ready(function () {

    // maximal power out calc
    function pwrCalc() {

        console.log($('#current-weight').val())
        
        //5s pwr
        var pwr5s = parseInt($('#pwr-5s-input').val()) / parseInt($('#current-weight').val())
        console.log('5 sec power ' + pwr5s.toFixed(2))
        $('#pwr-5s-output').val(pwr5s.toFixed(2))

        //1min pwr
        var pwr1min = parseInt($('#pwr-1min-input').val()) / parseInt($('#current-weight').val())
        console.log('1 min power ' + pwr1min.toFixed(2))
        $('#pwr-1min-output').val(pwr1min.toFixed(2))

        //5min pwr
        var pwr5min = parseInt($('#pwr-5min-input').val()) / parseInt($('#current-weight').val())
        console.log('5 min power ' + pwr5min.toFixed(2))
        $('#pwr-5min-output').val(pwr5min.toFixed(2))

        //ftp pwr
        var pwrftp = parseInt($('#pwr-ftp-input').val()) / parseInt($('#current-weight').val())
        console.log('FTP power ' + pwrftp.toFixed(2))
        $('#pwr-ftp-output').val(pwrftp.toFixed(2))


        // 5s ranking 
        if (pwr5s < 12.35 && pwr5s > 10.17 ) {
            $('#class-5s').text('Untrained - Non Racer')
        } else if(pwr5s < 13.98 && pwr5s > 11.80) {
            $('#class-5s').text('Fair - Cat 5')
        } else if (pwr5s < 15.61 && pwr5s > 13.71) {
            $('#class-5s').text('Moderate - Cat 4')
        } else if (pwr5s < 17.24 && pwr5s > 15.07) {
            $('#class-5s').text('Good - Cat 3')
        } else if (pwr5s < 19.15 && pwr5s > 16.97) {
            $('#class-5s').text('Very Good - Cat 2')
        } else if (pwr5s < 20.78 && pwr5s > 18.60) {
            $('#class-5s').text('Excellent - Cat 1')
        } else if (pwr5s < 22.41 && pwr5s > 20.23) {
            $('#class-5s').text('Exceptional - Domestic Pro')
        } else if (pwr5s < 24.04 && pwr5s > 21.86) {
            $('#class-5s').text('World Class - International Pro')
        } else {
            $('#class-1min').text('You need to work on this!')
        }

        // 1m ranking 
        if (pwr1min < 6.56 && pwr1min > 5.64) {
            $('#class-1min').text('Untrained - Non Racer')
        } else if (pwr1min < 7.25 && pwr1min > 6.33) {
            $('#class-1min').text('Fair - Cat 5')
        } else if (pwr1min < 7.94 && pwr1min > 7.02) {
            $('#class-1min').text('Moderate - Cat 4')
        } else if (pwr1min < 8.63 && pwr1min > 7.71) {
            $('#class-1min').text('Good - Cat 3')
        } else if (pwr1min < 9.43 && pwr1min > 8.51) {
            $('#class-1min').text('Very Good - Cat 2')
        } else if (pwr1min < 10.12 && pwr1min > 9.20) {
            $('#class-1min').text('Excellent - Cat 1')
        } else if (pwr1min < 10.81 && pwr1min > 9.81) {
            $('#class-1min').text('Exceptional - Domestic Pro')
        } else if (pwr1min < 11.50 && pwr1min > 10.58) {
            $('#class-1min').text('World Class - International Pro')
        } else {
            $('#class-1min').text('You need to work on this!')
        }

        // 5min ranking
        if (pwr5min < 3.15 && pwr5min > 2.33) {
            $('#class-5min').text('Untrained - Non Racer')
        } else if (pwr5min < 3.77 && pwr5min > 2.95) {
            $('#class-5min').text('Fair - Cat 5')
        } else if (pwr5min < 4.39 && pwr5min > 3.57) {
            $('#class-5min').text('Moderate - Cat 4')
        } else if (pwr5min < 5.01 && pwr5min > 4.19) {
            $('#class-5min').text('Good - Cat 3')
        } else if (pwr5min < 5.74 && pwr5min > 4.91) {
            $('#class-5min').text('Very Good - Cat 2')
        } else if (pwr5min < 6.36 && pwr5min > 5.53) {
            $('#class-5min').text('Excellent - Cat 1')
        } else if (pwr5min < 6.98 && pwr5min > 6.15) {
            $('#class-5min').text('Exceptional - Domestic Pro')
        } else if (pwr5min < 7.60 && pwr5min > 6.77) {
            $('#class-5min').text('World Class - International Pro')
        } else {
            $('#class-1min').text('You need to work on this!')
        }

        //ftp ranking
        if (pwrftp < 2.58 && pwrftp > 1.86) {
            $('#class-ftp').text('Untrained - Non Racer')
        } else if (pwrftp < 3.11 && pwrftp > 2.40) {
            $('#class-ftp').text('Fair - Cat 5')
        } else if (pwrftp < 3.64 && pwrftp > 2.93) {
            $('#class-ftp').text('Moderate - Cat 4')
        } else if (pwrftp < 4.18 && pwrftp > 3.47) {
            $('#class-ftp').text('Good - Cat 3')
        } else if (pwrftp < 4.80 && pwrftp > 4.09) {
            $('#class-ftp').text('Very Good - Cat 2')
        } else if (pwrftp < 5.33 && pwrftp > 4.62) {
            $('#class-ftp').text('Excellent - Cat 1')
        } else if (pwrftp < 5.87 && pwrftp > 5.15) {
            $('#class-ftp').text('Exceptional - Domestic Pro')
        } else if (pwrftp < 6.40 && pwrftp > 5.69) {
            $('#class-ftp').text('World Class - International Pro')
        } else {
            $('#class-1min').text('You need to work on this!')
        }

        // zwift racing
        if (pwrftp < 5.00 && pwrftp > 4.00) {
            $('.zwift-cat').text('A')
            $('.zwift-color').css('background-color', '#FA472C')
            console.log('Zwift Cat A')
        } else if (pwrftp < 4.00 && pwrftp > 3.20) {
            $('.zwift-cat').text('B')
            $('.zwift-color').css('background-color', '#5BC252')
            console.log('Zwift Cat B')
        } else if (pwrftp < 3.10 && pwrftp > 2.50) {
            $('.zwift-cat').text('C')
            $('.zwift-color').css('background-color', '#44BFE8')
            console.log('Zwift Cat C')
        } else if (pwrftp < 2.40 && pwrftp > 1.00) {
            $('.zwift-cat').text('D')
            $('.zwift-color').css('background-color', '#FCD030')
            console.log('Zwift Cat D')
        }
        

    }

    $('#calc-wkg').click(function(){
        pwrCalc()
    })

    $('#reset').click(function(){
        $('.input-group').find("input[type=text]").val("")
        $('.zwift-cat').text('?')
        $('.zwift-color').css('background-color', '#000')
    })
})