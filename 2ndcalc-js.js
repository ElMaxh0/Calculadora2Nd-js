
        function calcular() {
            var a = Number(document.getElementById('numa').value)
            var b = Number(document.getElementById('numb').value)
            var c = Number(document.getElementById('numc').value)
            var res = document.getElementById('res')
			var calc = document.getElementById('calc')
			var end = document.getElementById('end')
			res.innerHTML += "<br>Equacao :-)"
            res.innerHTML = `${a}x² + ${b}x + ${c} = 0`
            /*
            ========================================================
            */
            var valora = Number(document.getElementById('numa').value)
            var valorb = Number(document.getElementById('numb').value)
            var valorc = Number(document.getElementById('numc').value)

            var quadradodeb = valorb * valorb;
			if( valora == "" ) {
				// => Code goes here
				res.innerHTML += "<BR>Isto Nao e uma equação do Segundo Grau , Pois nao possui termo ao Quadrado Tente Novamente <BR>"
				}
			else if( valorb == "" ){
			res.innerHTML += "<br>Esta Equação Nao Possui o termo B "
			res.innerHTML += '<br>==================================<br><h1>Equação </h1>'
			res.innerHTML += "<p>" + valora + "X<sup>2</sup> +" + valorb + "x+" + valorc + "=0"
			res.innerHTML += "<br><h1>Resolução Possivel</h1>"
			var calcz = valorc / valora
			var calculo = - Math.sqrt(calcz)
			res.innerHTML +="<br>" + calculo + "<br>"
			calc.innerHTML += "<br>==================================<br><h1>Calculo  </h1>"
			calc.innerHTML += "<p><br>" + valora + "X<sup>2</sup> +" + valorb + "x+" + valorc + "=0"
			calc.innerHTML += "<p><br>" + valora + "X<sup>2</sup> = =0-"+ valorc + "</p>"
			calc.innerHTML += "<p><br>X<sup>2</sup> =0-"+ valorc + "/"+ valora +"/</p>"
			calc.innerHTML += "<p><X<sup>2</sup> = =0-"+ String((-valorc) / valora)+ "/</p>"
			calc.innerHTML += "<p>X<sup>2</sup> =0-"+ String((-valorc) / valora)+ "</p>"
			calc.innerHTML += "<p>X  =&radic; "+ String((-valorc) / valora)+ "</p>"
			calc.innerHTML += "<p>X  = "+ calculo + "</p>"
			calc.innerHTML += "<p>X  = "+ calculo + "</p>"
			}
			else if( valorc == "" ){
					var finalsemc = valorb / valora;
					calc.innerHTML += '<br><p><b>Calculo Por Passos</b></p>'
					calc.innerHTML += "<br>x<sup>2</sup>= x+x"
					calc.innerHTML += "<br><p>-----------</br></p>"
					calc.innerHTML += "<br><p>" + valorb + "x</p>"
					calc.innerHTML += "<br><p>-----------</br>="+ valorb +"</p>"
					calc.innerHTML += "<center>x</center>"
					calc.innerHTML += "<p>x(" + valora +"x+" + valorb + ")=0</p>"
					calc.innerHTML += "<P> x=" + valorb + "/" + valora + "</p>"
					calc.innerHTML += "<p>"+ finalsemc + "</p>"
					res.innerHTML += "o Valor de C (num) Nao Esta Presente "
					res.innerHTML += "<h1> Equacao</h1>"
					res.innerHTML += "<p><br>" + valora + "X<sup>2</sup> +" + valorb + "x+" + valorc + "=0"
					res.innerHTML += "<h1>Possiveis Resultados </h1>"
					res.innerHTML += "<p>"+ finalsemc + "</p>"
				
						}
			
				else{
           

            var delta = quadradodeb - 4 * valora * valorc;

            if (delta < 0) {
                res.innerHTML += "Não é possível calcular pois o Delta é menor que zero."
                return;
            }

            if (delta == 0) {
                res.innerHTML += "O Delta é zero, portando os valores de X1 e X2 serão iguais.<br>"
                return;
            }

            var valordebneg = valorb * (-1); /* INVERTE O SINAL DO B */

            var raizdedelta = Math.sqrt(delta); /* CALCULA A RAIZ DO DELTA, NO CASO, FEITO PELA FUNÇÃO Math.sqrt(variável) */

            var divisor = 2 * valora; /* CALCULA O DIVISOR, NO CASO QUE DIVIDIRÁ B + RAIZ DE DELTA */

            var resultadox1 = (valordebneg + raizdedelta) / divisor; /* CALCULA O X1 */

            var resultadox2 = (valordebneg - raizdedelta) / divisor; /* CALCULA O X2 */
            res.innerHTML += '<br>==================================<br><h1>Equação </h1>'
			res.innerHTML += "<p>" + valora + "X<sup>2</sup> +" + valorb + "x+" + valorc + "=0"
			res.innerHTML += '<br>==================================<br><h1>Possiveis Resultados </h1>'
			res.innerHTML += "" + resultadox1 + "ou" + resultadox2 
			var provar1 = valora*(resultadox1*resultadox1)+ valorb* resultadox1 + valorc
			var provar2 = valora*(resultadox1*resultadox1)+ valorb* resultadox1 + valorc
			if (valora * + (resultadox2 * resultadox2 ) + valorb * resultadox2 + valorc == 0) {
                res.innerHTML += "<br>O Valor de X2 Passou no teste de prova real</span><br> "
               
            }
			else {
				 res.innerHTML += "X2 Nao Passou no teste de prova real "
			}
			if ( valora * + (resultadox1 * resultadox1 ) + valorb * resultadox1 + valorc == 0) {
                res.innerHTML += "<br>O Valor de X1 Passou no teste de prova real</span><br> "
                
            }
			else{
			res.innerHTML += "X1 Nao Passou no teste de prova real "
			}
			calc.innerHTML += '<br>==================================<br><h2>Calculo</h2> '
			calc.innerHTML += "<br>Resolução do Baskara <br>"
            calc.innerHTML += "∆ = B² - 4 X A X C<br>"
            calc.innerHTML += "∆ = " + quadradodeb + " - 4 X " + valora + " X " + valorb
            calc.innerHTML += "<br>∆ = " + delta
			
            calc.innerHTML += "<br>X = -B +ou- √∆ <br>__________________<br>      2 X A"
			
            calc.innerHTML += "<br> X = " + valordebneg + " +ou- " + raizdedelta + "<br>____________________<br>      2 X " + valora
			calc.innerHTML += "<br>Calculo Possibilidade 1 <br>"
            calc.innerHTML += "<br>X1 = " + - valorb + " + " + raizdedelta + " / " + divisor
            calc.innerHTML += "<br>X1 = " + resultadox1
			calc.innerHTML +="<br>____________________<br>"
			calc.innerHTML += "<br>Calculo Possibilidade 2 <br>"
            calc.innerHTML += "<br>X2 = " + - valorb  + " - " + raizdedelta + " / " + divisor
            calc.innerHTML += "<br>X2 = " + resultadox2
            calc.innerHTML += '<br>==================================<br><h1>Prova Real!</h1>'
			calc.innerHTML += "<br><h4>Testando Possibilidade 1 </h4><br>"
			calc.innerHTML += "<br>" + valora + "X<sup>2</sup> +" + valorb + "x+" + valorc + "=0"
			calc.innerHTML += "<br>" + valora + "("+ resultadox1 + ")<sup>2</sup> +" + valorb + "("+resultadox1+"+"+ valorc + "=0"
			calc.innerHTML += "<br>" + valora + "*"+ resultadox1 * resultadox1 +"+"+ valorb + "("+resultadox1+"+"+ valorc + "=0"
			calc.innerHTML += "<br>" + valora * + (resultadox1 * resultadox1 ) +"+"+ valorb * resultadox1 +"+"+ valorc + "=0"
			calc.innerHTML += "<br>" + String(valora * + (resultadox1 * resultadox1 ) + valorb * resultadox1 + valorc) + "=0"
			if ( valora * + (resultadox1 * resultadox1 ) + valorb * resultadox1 + valorc == 0) {
                calc.innerHTML += "<br>O Valor de X1 Passou no teste de prova real</span><br> "
               
            }
			else{
			calc.innerHTML += "<BR>Este Valor Nao Passou No Teste de Prova Real <br><br>"
			}
			calc.innerHTML +="<br>____________________<br>"
			calc.innerHTML += "<br><h4>Testando Possibilidade 2 </h4><br>"
			calc.innerHTML += "<p>" + valora + "X<sup>2</sup> +" + valorb + "x+" + valorc + "=0"
			calc.innerHTML += "<p>" + valora + "("+ resultadox2 + ")<sup>2</sup> +" + valorb + "("+resultadox2+"+"+ valorc + "=0"
			calc.innerHTML += "<p>" + valora + "*"+ resultadox2* resultadox2 +"+"+ valorb + "("+resultadox2+"+"+ valorc + "=0"
			calc.innerHTML += "<p>" + valora *  (resultadox2 * resultadox2 ) +"+"+ valorb * resultadox2 +"+"+ valorc + "=0"
			calc.innerHTML += "<p>" + String(valora * + (resultadox2 * resultadox2 ) + valorb * resultadox2 + valorc )+ "=0"
			if (valora * + (resultadox2 * resultadox2 ) + valorb * resultadox2 + valorc  == 0) {
                calc.innerHTML += "<br>O Valor de X2 Passou no teste de prova real</span><br> "
            }
			else{
			calc.innerHTML += "Este Valor Nao Passou No Teste de Prova Real "
			}}
			end.innerHTML += '<br>==================================<br> Processamento Finalizado!'
			
			end.innerHTML += '<br><button type="submit"  class = "bt-az" onClick="next()">Proximo Calculo </button> '
        }
		function next(){
window.location.reload();
calc.style.display="none";
calc.style.visibility="hidden";
res.style.display="none";
res.style.visibility="hidden";
} 
