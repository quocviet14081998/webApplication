$(document).ready(function(){
             var arr=[];//mảng chứa các item bị xóa để có thể hồi phục
             //click lên ptu nào , chuỗi thay đổi tương ứng 
             $("ol>li").click(function(){
               $("p#view").text($(this).text());
           });
             //click lên radio id='no'
             $("#no").click(function(){
              $("#view").removeClass("shadow");
          });
             //click lên radio id='yes'
             $("#yes").click(function(){
              $("#view").addClass("shadow");
          })
             //thay đổi màu chữ
             $("#textcolor").change(function(){
               $("#view").css("color",$(this).val());
           });
             //click button xóa phần tử cuối
             $("#btDel").click(function(){
               var text = $("ol li:last").text();
               if(text == "")return;
                 arr.unshift(text);//thêm chuỗi bị xóa vào ds arr
                 $("ol li:last").remove();//xóa <li> cuối
             });
             //click button pu=hục hồi
             $("#btUndo").click(function(){
                 if(arr.length == 0)return;//ds rỗng ko xử lý
                 var item = "<li>" + arr.shift()+"</li>";//tạo ptu <li> vs phần tử lấy ở đầu ds
                 $("ol").append(item);//thêm vào cuối ol
             })
         })