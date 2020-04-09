fetch('scripts/temples.json')
    .then(
        response => {
            return response.json();
        }
    )
    .then(
        templeList => {
            let temples = templeList.temples;

            temples.forEach (
                temple => {
                    if (temple.templeName === 'Nauvoo Illinois Temple') {
                        document.querySelector('#templeIl').textContent = temple.templeName;
                        document.querySelector('#addressIl').innerHTML = temple.streetLine1 + `<br>` + temple.city + ', ' + 
                        temple.state + ' ' + temple.zipcode + `<br>` + temple.country;
                        document.querySelector('#phoneIl').textContent = temple.telephone;
                        document.querySelector('#emailIl').textContent = temple.email;
                        document.querySelector('#servicesIl').innerHTML = temple.services[0] + `<br>` + temple.services[1] + `<br>` + 
                        temple.services[2] + `<br>` + temple.services[3];
                        document.querySelector('#ordinanceIl1').textContent = temple.schedule.initiatory;
                        document.querySelector('#ordinanceIl2').textContent = temple.schedule.endowment;
                        document.querySelector('#ordinanceIl3').textContent = temple.schedule.sealings;
                        document.querySelector('#closureIl').innerHTML = temple.closures[0] + `<br>` + temple.closures[1] + `<br>` + 
                        temple.closures[2] + `<br>` + temple.closures[3] + `<br>` + temple.closures[4];
                        document.querySelector('#historyIl1').textContent = temple.history[0].date;
                        document.querySelector('#historyIl1_1').textContent = temple.history[0].milestone;
                        document.querySelector('#historyIl2').textContent = temple.history[1].date;
                        document.querySelector('#historyIl2_1').textContent = temple.history[1].milestone;
                        document.querySelector('#historyIl3').textContent = temple.history[2].date;
                        document.querySelector('#historyIl3_1').textContent = temple.history[2].milestone;
                    }
                    else if (temple.templeName === 'Palmyra New York Temple') {
                        document.querySelector('#templeNy').textContent = temple.templeName;
                        document.querySelector('#addressNy').innerHTML = temple.streetLine1 + `<br>` + temple.city + ', ' + 
                        temple.state + ' ' + temple.zipcode + `<br>` + temple.country;
                        document.querySelector('#phoneNy').textContent = temple.telephone;
                        document.querySelector('#emailNy').textContent = temple.email;
                        document.querySelector('#servicesNy').innerHTML = temple.services[0] + `<br>` + temple.services[1] + `<br>` + 
                        temple.services[2] + `<br>` + temple.services[3];
                        document.querySelector('#ordinanceNy1').textContent = temple.schedule.initiatory;
                        document.querySelector('#ordinanceNy2').textContent = temple.schedule.endowment;
                        document.querySelector('#ordinanceNy3').textContent = temple.schedule.sealings;
                        document.querySelector('#closureNy').innerHTML = temple.closures[0] + `<br>` + temple.closures[1] + `<br>` + 
                        temple.closures[2] + `<br>` + temple.closures[3] + `<br>` + temple.closures[4] + `<br>` + temple.closures[5] + 
                        `<br>` + temple.closures[6] + `<br>` + temple.closures[7];
                        document.querySelector('#historyNy1').textContent = temple.history[0].date;
                        document.querySelector('#historyNy1_1').textContent = temple.history[0].milestone;
                        document.querySelector('#historyNy2').textContent = temple.history[1].date;
                        document.querySelector('#historyNy2_1').textContent = temple.history[1].milestone;
                        document.querySelector('#historyNy3').textContent = temple.history[2].date;
                        document.querySelector('#historyNy3_1').textContent = temple.history[2].milestone;
                    }
                    else if (temple.templeName === 'Provo City Center Temple') {
                        document.querySelector('#templeP').textContent = temple.templeName;
                        document.querySelector('#addressP').innerHTML = temple.streetLine1 + `<br>` + temple.city + ', ' + 
                        temple.state + ' ' + temple.zipcode + `<br>` + temple.country;
                        document.querySelector('#phoneP').textContent = temple.telephone;
                        document.querySelector('#emailP').textContent = temple.email;
                        document.querySelector('#servicesP').innerHTML = temple.services[0] + `<br>` + temple.services[1] + `<br>` + 
                        temple.services[2] + `<br>` + temple.services[3];
                        document.querySelector('#ordinanceP1').textContent = temple.schedule.initiatory;
                        document.querySelector('#ordinanceP2').textContent = temple.schedule.endowment;
                        document.querySelector('#ordinanceP3').textContent = temple.schedule.sealings;
                        document.querySelector('#closureP').innerHTML = temple.closures[0] + `<br>` + temple.closures[1] + `<br>` + 
                        temple.closures[2] + `<br>` + temple.closures[3] + `<br>` + temple.closures[4] + `<br>` + temple.closures[5] + 
                        `<br>` + temple.closures[6] + `<br>` + temple.closures[7] + `<br>` + temple.closures[8];
                        document.querySelector('#historyP1').textContent = temple.history[0].date;
                        document.querySelector('#historyP1_1').textContent = temple.history[0].milestone;
                        document.querySelector('#historyP2').textContent = temple.history[1].date;
                        document.querySelector('#historyP2_1').textContent = temple.history[1].milestone;
                        document.querySelector('#historyP3').textContent = temple.history[2].date;
                        document.querySelector('#historyP3_1').textContent = temple.history[2].milestone;
                    }
                    else if (temple.templeName === 'Chicago Illinois Temple') {
                        document.querySelector('#templeC').textContent = temple.templeName;
                        document.querySelector('#addressC').innerHTML = temple.streetLine1 + `<br>` + temple.city + ', ' + 
                        temple.state + ' ' + temple.zipcode + `<br>` + temple.country;
                        document.querySelector('#phoneC').textContent = temple.telephone;
                        document.querySelector('#emailC').textContent = temple.email;
                        document.querySelector('#servicesC').innerHTML = temple.services[0] + `<br>` + temple.services[1] + `<br>` + 
                        temple.services[2] + `<br>` + temple.services[3];
                        document.querySelector('#ordinanceC1').textContent = temple.schedule.initiatory;
                        document.querySelector('#ordinanceC2').textContent = temple.schedule.endowment;
                        document.querySelector('#ordinanceC3').textContent = temple.schedule.sealings;
                        document.querySelector('#closureC').innerHTML = temple.closures[0] + `<br>` + temple.closures[1] + `<br>` + 
                        temple.closures[2] + `<br>` + temple.closures[3] + `<br>` + temple.closures[4];
                        document.querySelector('#historyC1').textContent = temple.history[0].date;
                        document.querySelector('#historyC1_1').textContent = temple.history[0].milestone;
                        document.querySelector('#historyC2').textContent = temple.history[1].date;
                        document.querySelector('#historyC2_1').textContent = temple.history[1].milestone;
                        document.querySelector('#historyC3').textContent = temple.history[2].date;
                        document.querySelector('#historyC3_1').textContent = temple.history[2].milestone;
                    }
                }
            )
        }
    );