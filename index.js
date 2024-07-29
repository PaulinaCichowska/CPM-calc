const form = document.querySelector("#formId");

function submitForm(event) {
    event.preventDefault();
    const pattern = form.elements.pattern.value
    const weight = form.elements.weight.value
    const height = form.elements.height.value
    const age = form.elements.age.value
    const sex = form.elements.sex.value

    switch (pattern) {
        case 'PPM-M':
            if (sex === 'woman') {
                result = Math.ceil((10 * weight) + (6.25 * height) - (5 * age) - 161)
                console.log(result)
            } else if (sex === 'man') {
                result = Math.ceil((10 * weight) + (6.25 * height) - (5 * age) + 5)
                console.log(result)
            }
            break;
        case 'PPM-HB':
            if (sex === 'woman') {
                result = Math.ceil(655.1 + (9.563 * weight) + (1.85 * height) - (4.676 * age))
                console.log(result)
            } else if (sex === 'man') {
                result = Math.ceil(66.5 + (13.75 * weight) + (5.003 * height) - (6.775 * age))
                console.log(result)
            }
            break;
    }

    const Pal1 = parseFloat(form.elements.Training.value)
    const Pal2 = parseFloat(form.elements.NonTraining.value)

    const finalPAL = (Pal1 + Pal2) / 2
    const CpmResult = Math.ceil(finalPAL * result)

    const resultHtml = document.querySelector(".result")
    resultHtml.textContent = CpmResult
    console.log(CpmResult)

}


function handleSubmit(event) {
    event.preventDefault();


}

//wzór Mifflina
// PPM (kobiety) = SWE (spoczynkowy wydatek energetyczny kcal) = (10 x masa ciała [kg])+(6,25 x wzrost [cm]) -(5 x [wiek]) – 161
// PPM (mężczyźni) = SWE (spoczynkowy wydatek energetyczny kcal) = (10 x masa ciała [kg])+(6, 25 x wzrost [cm]) -(5 x [wiek]) + 5

//wzór Harrisa-Benedicta
// PPM (kobiety) = SWE (spoczynkowy wydatek energetyczny kcal) = 655,1 + (9,563 x masa ciała [kg]) + (1,85 x wzrost [cm]) – (4,676 x [wiek])
// PPM (mężczyźni) = SWE (spoczynkowy wydatek energetyczny kcal) = 66,5 + (13,75 x masa ciała [kg]) + (5,003 x wzrost [cm]) – (6,775 x [wiek])


form.addEventListener('submit', submitForm);
