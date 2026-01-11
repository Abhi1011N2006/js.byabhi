const insert = document.getElementById('insert');
window.addEventListener('keydown' , (e)=>{
   
    
    insert.innerHTML=`
    <table border = "1">
        <thead>
            <tr>
                <th>KEY</th>
                <TH>KEYCODE</TH>
                <TH>CODE</TH>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>${e.key == ' '? 'Space' : e.key}</td>
                <td>${e.keyCode}</td>
                <td>${e.code}</td>
            </tr>
        </tbody>

    </table>
    `;
   
});
