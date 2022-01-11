var res = false; // la variable est declaree globale pour pouvoir etre modiee par les deux fonctions

function Radio() {
var total=0; // la variable pour stocker le total du score
var conclusion=""; // ta conclusion

/*un appel au calcul testeUnGroupe pour chaque groupe de bouton
on devrait pouvoir automatiser avec une boucle for mais pour 5 groupes j ai pas fait
*/

s1=Math.abs(testeUnGroupe("score1")); // transformer en valeur absolue vie la lib math on peut pas additionner des lettres !
s2=Math.abs(testeUnGroupe("score2"));
s3=Math.abs(testeUnGroupe("score3"));
s4=Math.abs(testeUnGroupe("score4"));
s5=Math.abs(testeUnGroupe("score5"));
s6=Math.abs(testeUnGroupe("score6"));

total+=s1+s2+s3+s4+s5+s6;

if (res==false) 
  {
  alert("Certaines questions sont sans réponses.");
  }
  else // si on a renseigne tous les groupes de boutton
  {    
               
if (total >= 5) 
  {
	conclusion = "Le profil semble adapté à une prise en charge en Réhabilitation Psychosociale, merci de contactez l'unité de votre secteur";
  }

else
  {
	conclusion = "Le profil ne semble pas adapté à une prise en charge en Réhabilitation Psychosociale.";
  }                 

               alert("Conclusion : "+conclusion);  
  } // fin else res

	}

	

  
  
function testeUnGroupe(leGroupe)
  {
 
  var radioGroup = document.getElementsByName(leGroupe);
	var n = radioGroup.length;
  var m=0; 
  for (var i=0;i<n;i++)
                 {
		if (radioGroup[i].checked)
        {
        m+=radioGroup[i].value;
			  res = true;
      	}
        
  }
  return(m);
 
}



