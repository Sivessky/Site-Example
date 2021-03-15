function dwld() {

   const text = document.querySelector("#mainText");
   const maintext = text.textContent
   console.log(maintext)
   //Присвоение константе содержимого <div> и вычленение из него чистого текста
   //Assigning the content of a <div> to a constant and extracting pure text from it

   const downloadToFile = (content, filename, contentType) => {
      const a = document.createElement('a');
      const file = new Blob([content], {type: contentType});
      
      a.href= URL.createObjectURL(file);
      a.download = filename;
      a.click();
    
      URL.revokeObjectURL(a.href);

      //Функия призвана создать шаблон для создания и сохранения файла 
      //The function needed to create a template for creating and saving a file

   };

   downloadToFile(maintext, 'Скачано из текущей страницы.txt', 'text/plain');

   //Подставляем текст под созданный шаблон, называем файл и задаем его содержимое
   //Substitute the text under the created template, name the file and set its content

}


function dwld1() {

   //Аналогичное сохранение для англ. варианта ячейки
   //Similar saving for English. cell variant

   const text = document.querySelector(".mainText2");
   const maintext = text.textContent
   console.log(maintext)

   const downloadToFile = (content, filename, contentType) => {
      const a = document.createElement('a');
      const file = new Blob([content], {type: contentType});
      
      a.href= URL.createObjectURL(file);
      a.download = filename;
      a.click();
    
         URL.revokeObjectURL(a.href);
   };

   
   downloadToFile(maintext, 'Downloaded from actual page.txt', 'text/plain');
   
}