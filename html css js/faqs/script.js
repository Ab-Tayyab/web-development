const items = document.querySelectorAll('.faq-item')

items.forEach((item)=>{
    const icon = item.querySelector(".icon")
    icon.addEventListener('click',(e)=>{
        e.stopPropagation()

        const isActive = item.classList.contains("active")
        items.forEach((i)=>{
            i.classList.remove("active")
        }
    )
    if(!isActive){
        item.classList.add("active")
    }
    })
})