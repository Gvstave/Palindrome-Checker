const text_input = document.querySelector('#text-input')
const check_btn = document.querySelector('#check-btn')
const result = document.querySelector('#result')

check_btn.addEventListener('click', function(){
    const input_value = text_input.value
        const input_remove = input_value.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')
            const input_reverse = input_remove.split("").reverse().join("")
                
                    if(input_value === ""){
                        alert("Please input a value.")
                          }
                              else if(input_remove === input_reverse){
                                      result.innerHTML = `${input_value} is a palindrome`
                                          }
                                              else{
                                                      result.innerHTML = `${input_value} is not a palindrome`
                                                          }
                                                            
                                                            })
