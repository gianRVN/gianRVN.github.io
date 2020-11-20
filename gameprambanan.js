

document.addEventListener("click",prambanan);

function prambanan(){
   let kata = ["ambil batu di pegunungan","gali tanah dengan cangkul","beli palu di desa sari" ]
   document.getElementById('pesan').innerText = kata[Math.floor(Math.random() * kata.length)];
}

function jawaban(){
   let answer = document.getElementById('jawaban')
   if(answer.value!== "buang batu di pegunungan" || answer.value!=="timbun tanah dengan cangkul" !== answer.value!=="jual palu di desa sari"){
      alert("JAWABAN SALAH \n (perhatikan hanya ubah kata kerjanya saja)")
   } else {
      answer.innerText = "BENAR, AYO HANCURKAN PESAN LAINNYA"
   }
}


