database.collection("practice_firebase").get().then((data)=>{
   
         var result = ""; 
         data.forEach(el => { 
          // console.log(el);
           result += `
           <div class="card shadow-lg mt-5">
           <div class="card-header">
             <img src="${el.data().profile}" width="40" class="rounded-circle mr-2" height="40" alt="">
             ${el.data().name}
             <button type="button" class="btn btn-primary float-right" data-toggle="modal" data-target="#myModal${el.id}"> View</button>
           </div>
           <div class="card-body">
             <img src="${el.data().post}" class="img-fluid" alt="">
           </div>
           <div class="card-footer">
            ${el.data().text}
              <button type="button" class="btn btn-danger float-right" onclick="deleteData('${el.id}')">Delete</button>
           </div>
         </div>

  <div class="modal fade" id="myModal${el.id}">
    <div class="modal-dialog">
      <div class="modal-content">
      
        <div class="modal-header">
        <img src="${el.data().profile}" width="40" class="rounded-circle mr-2" height="40" alt="">
        ${el.data().name}
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        
        <!-- Modal body -->
        <div class="modal-body">
        <img src="${el.data().post}" class="img-fluid" alt="">
        </div>
        <div class="card-footer">
            ${el.data().text}
              <button type="button" class="btn btn-danger float-right" data-dismiss="modal">Delete</button>
           </div>
      </div>
    </div>
  </div>
           `;
    });
    $('#result').append(result);

    
  });
      $('#add').on('click',function(){
        var name = $('#user').val();
        var profile = $('#profile').val();
        var post = $('#post').val();
        var text = $('#text').val();
        database.collection("practice_firebase").add({
          name: name,
          profile: profile,
          post: post,
          text: text,
        });
        $("input[type=text], textarea").val("");
});
function deleteData(deletes) {
  database.collection("practice_firebase").doc(deletes).delete();
}