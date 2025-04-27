let items = ['olma', 'banan', 'gillos', 'shaftoli'];

console.log(items.length  +  items);
alert('Boshlanish arrayning uzunligi:' + items.length);

if (confirm('Sizning arrayingizdan malumotlarni olib tashlamoqchimisiz?')) {
    items.pop();
    alert('Arrayning uzunligi:' + items.length);
    console.log(items.length  +  items);
} else {
    alert('Arrayning uzunligi:' + items.length);
    console.log(items.length  +  items);
}