function startTable() {
    var show_table_screen = document.getElementById('show-table-screen')// select para mostrar a tabuada
    var indentificador_tabuada = document.getElementById('indentificador-tabuada') // section mostrar o número da tabuada
    var input_choose_table = document.getElementById('choose-table') // input
    var error = document.getElementById('error') // section erro
    if(input_choose_table.value == 0) {
        alert('Digite um número!')
        error.style.background = '#f00'
        error.style.textAlign = 'center'
        error.style.color = 'white'
        error.style.padding = '8px'
        error.style.borderRadius = '2rem 1rem'
        error.innerHTML = `Erro no sistema.`
        indentificador_tabuada.style.background = ''
        indentificador_tabuada.style.textAlign = ''
        indentificador_tabuada.style.color = ''
        indentificador_tabuada.style.padding = ''
        indentificador_tabuada.style.borderRadius = ''
        indentificador_tabuada.style.margin = ''
        indentificador_tabuada.innerHTML = ''
    }else{
        error.style.background = ''
        error.style.textAlign = ''
        error.style.color = ''
        error.style.padding = ''
        error.style.borderRadius = ``
        error.innerHTML = ``
        let tabuada = Number(input_choose_table.value)

        indentificador_tabuada.style.background = 'rgb(161, 85, 31)'
        indentificador_tabuada.style.textAlign = 'center'
        indentificador_tabuada.style.color = 'white'
        indentificador_tabuada.style.padding = '8px'
        indentificador_tabuada.style.borderRadius = '2rem 1rem'
        indentificador_tabuada.style.margin = `15px 0`
        indentificador_tabuada.innerHTML = `Tabuada do ${tabuada}`

        let cont = 1
        // Para limpar a tela
        show_table_screen.innerHTML = ``
        while(cont <= 10) {
            let create_op = document.createElement('option')
            create_op.innerHTML = `${tabuada} x ${cont} = ${tabuada * cont}`
            show_table_screen.appendChild(create_op)
            cont++
        }
    }
}
function iniciaCalculo() {
    const res_tabuada = document.getElementById('select-res-tabuada')
    const res2 = document.getElementById('section-error')
    const input_calcular = document.getElementById('input-calcular')
    var escolha_tabuada = document.getElementById('escolha-tabuada').value
    if(input_calcular.value == 0) {
        alert('Erro no sistema.')
        res2.style.textAlign = 'center'
        res2.style.borderRadius = '2rem 1rem' 
        res2.style.padding = '8px'
        res2.style.background = '#f00'
        res2.style.color = '#fff'
        res2.innerHTML = `Erro no sistema.`
    }else{
        res2.innerHTML = ``
        res2.style.color = ``
        res2.style.background = ''
        res2.style.padding = ''
        res2.style.borderRadius = ''
        res2.style.textAlign = ''
        let question = ' '
        while(true) {
            question = prompt('Você quer input ou prompt? ')[0].toUpperCase()
            if(question === 'I' || question === 'P') {
                break
            }
        }
        if(question === 'I') {
            // Input
            let tabuada = Number(input_calcular.value) // recebe um número do input
            let nome = ' '
            while(true) {
                nome = prompt('Informe o seu nome, por favor: ').toUpperCase()
                if(nome.length !== 0) {
                    break
                }
            }
            let sexo = ' '
            while(true) {
                sexo = prompt('Informe o seu sexo, por favor: ').toUpperCase()
                if(sexo === 'M' || sexo === 'F') {
                    break
                }
            }
            let contador = 1
            res_tabuada.innerHTML = ``
            switch(escolha_tabuada) {
                case '1':
                    // Multiplucação
                    if(sexo === 'F') {
                        alert(`Olá, ${nome}! Bem-vinda a tabuada de multiplicação.`)
                    }else{
                        alert(`Olá, ${nome}! Bem-vindo a tabuada de multiplicação.`)
                    }
                    while(contador <= 10) {
                        let create_op2 = document.createElement('option')
                        create_op2.innerHTML = `${tabuada} x ${contador} = ${tabuada * contador}`
                        res_tabuada.appendChild(create_op2)
                        contador++
                    } 
                break

                case '2':
                    // Divisão
                    if(sexo === 'F') {
                        alert(`Olá, ${nome}! Bem-vinda a tabuada de divisão.`)
                    }else{
                        alert(`Olá, ${nome}! Bem-vindo a tabuada de divisão.`)
                    }
                    while(contador <= 10) {
                        let create_op2 = document.createElement('option')
                        create_op2.innerHTML = `${tabuada} / ${contador} = ${tabuada / contador}`
                        res_tabuada.appendChild(create_op2)
                        contador++
                    }
                break

                case '3':
                    // Soma
                    if(sexo === 'F') {
                        alert(`Olá, ${nome}! Bem-vinda a tabuada de soma.`)
                    }else{
                        alert(`Olá, ${nome}! Bem-vindo a tabuada de soma.`)
                    }
                    while(contador <= 10) {
                        let create_op2 = document.createElement('option')
                        create_op2.innerHTML = `${tabuada} + ${contador} = ${tabuada + contador}`
                        res_tabuada.appendChild(create_op2)
                        contador++
                    }
                break

                case '4':
                    // Subtração
                    if(sexo === 'F') {
                        alert(`Olá, ${nome}! Bem-vinda a tabuada de subtração.`)
                    }else{
                        alert(`Olá, ${nome}! Bem-vindo a tabuada de subtração.`)
                    }
                    while(contador <= 10) {
                        let create_op2 = document.createElement('option')
                        create_op2.innerHTML = `${tabuada} - ${contador} = ${tabuada - contador}`
                        res_tabuada.appendChild(create_op2)
                        contador++
                    }
                break

                default:
                    alert('Erro no sistema.')
                    res2.style.textAlign = 'center'
                    res2.style.borderRadius = '2rem 1rem' 
                    res2.style.padding = '8px'
                    res2.style.background = '#f00'
                    res2.style.color = '#fff'
                    res2.innerHTML = `Erro no sistema.`
                break
            }
        }else{
            // Prompt
            let nome2 = ' '
            while(true) {
                nome2 = prompt('Informe o seu nome, por favor: ').toUpperCase()
                if(nome2.length !== 0) {
                    break
                }
            }
            let sexo2 = ' '
            while(true) {
                sexo2 = prompt('Informe o seu sexo, por favor: ').toUpperCase()
                if(sexo2 === 'M' || sexo2 === 'F') {
                    break
                }
            }
            let num = 0
            while(true) {
                num = Number(prompt('Informe um número, por favor: '))
                if(typeof num === 'number') {
                    break
                }
            }
            let contador2 = 1
            res_tabuada.innerHTML = ``
            switch(escolha_tabuada) {
                case '1':
                    // Multiplucação
                    if(sexo2 === 'F') {
                        alert(`Olá, ${nome2}! Bem-vinda a tabuada de multiplicação.`)
                    }else{
                        alert(`Olá, ${nome2}! Bem-vindo a tabuada de multiplicação.`)
                    }
                    while(contador2 <= 10) {
                        let create_op2 = document.createElement('option')
                        create_op2.innerHTML = `${num} x ${contador2} = ${num * contador2}`
                        res_tabuada.appendChild(create_op2)
                        contador2++
                    } 
                break

                case '2':
                    // Divisão
                    if(sexo2 === 'F') {
                        alert(`Olá, ${nome2}! Bem-vinda a tabuada de divisão.`)
                    }else{
                        alert(`Olá, ${nome2}! Bem-vindo a tabuada de divisão.`)
                    }
                    while(contador2 <= 10) {
                        let create_op2 = document.createElement('option')
                        create_op2.innerHTML = `${num} / ${contador2} = ${num / contador2}`
                        res_tabuada.appendChild(create_op2)
                        contador2++
                    }
                break

                case '3':
                    // Soma
                    if(sexo2 === 'F') {
                        alert(`Olá, ${nome2}! Bem-vinda a tabuada de soma.`)
                    }else{
                        alert(`Olá, ${nome2}! Bem-vindo a tabuada de soma.`)
                    }
                    while(contador2 <= 10) {
                        let create_op2 = document.createElement('option')
                        create_op2.innerHTML = `${num} + ${contador2} = ${num + contador2}`
                        res_tabuada.appendChild(create_op2)
                        contador2++
                    }
                break

                case '4':
                    // Subtração
                    if(sexo2 === 'F') {
                        alert(`Olá, ${nome2}! Bem-vinda a tabuada de subtração.`)
                    }else{
                        alert(`Olá, ${nome2}! Bem-vindo a tabuada de subtração.`)
                    }
                    while(contador2 <= 10) {
                        let create_op2 = document.createElement('option')
                        create_op2.innerHTML = `${num} - ${contador2} = ${num - contador2}`
                        res_tabuada.appendChild(create_op2)
                        contador2++
                    }
                break

                default:
                    alert('Erro no sistema.')
                    res2.style.textAlign = 'center'
                    res2.style.borderRadius = '2rem 1rem' 
                    res2.style.padding = '8px'
                    res2.style.background = '#f00'
                    res2.style.color = '#fff'
                    res2.innerHTML = `Erro no sistema.`
                break
            }
        }
    }
}
function iniciaEntradaTabuada() {
    document.getElementById('table-section').style.boxShadow = '5px 8px 3px #606060'
    document.getElementById('table-section').style.transition = 'box-shadow .4s'
}
function iniciaSaidaTabuada() {
    document.getElementById('table-section').style.boxShadow = '12px 8px 3px #606060'
    document.getElementById('table-section').style.transition = 'box-shadow .4s'
}
function iniciaEntradaCalcular() {
    document.getElementById('section-calcular').style.boxShadow = '5px 8px 3px #606060'
    document.getElementById('section-calcular').style.transition = 'box-shadow .4s'
}
function iniciaSaidaCalcular() {
    document.getElementById('section-calcular').style.boxShadow = '12px 8px 3px #606060'
    document.getElementById('section-calcular').style.transition = 'box-shadow .4s'
}   