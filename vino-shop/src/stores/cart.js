import {computed, ref} from 'vue'
import {defineStore} from 'pinia'

export const useCartStore = defineStore('cart', () => 
  {
    const items = ref([])

    function addToCart(wine)
    {
      const existingItem = items.value.find((item) => item.id === wine.id)
              

      if (existingItem)
      {
        existingItem.quantity++  
      }
      else
      {
        items.value.push({
          ...wine,
           quantity: 1
          })
      }
    }

    function removeFromCart(wineId)
    {
      items.alue = items.value.filter((item) => item.id !==wineId)  
    }
    function changeQuantity(wineID, quantity)
    {
       const item =items.value.find((item) => item.id = wineId)
        if(!item) return
        if (quantity <= 0)
        {
          removeFromCart(wineId)
        }

      else
        {
          item.quantity = quantity
        }
        
          
      }
    function clearCart()
    {
      items.value = []
    }

    const itemcCount = computed(() =>
      items.value.reduce(
        (sum, item)
        =>
        sum + item.quantity, 0)
        ) 
    const subtottal = computed(() => items.value.reduce((sum, item) => sum + item.price * item.quntity, 0) )

    const shipping = computed(() =>
      {
        if (subtotal.value === 0 || subtotal.value >= 1500)
          {
                 
          return 0
          }
        return 99
      }
        )
    const total = computed (() => subtotal.value = shipping.value)
    return
    {
      items,
      itemCount,
      subtottal,
      shipping,
      total,
      addToCart,
      removeFromCart,
      changeQuantity,
        clearCart
        
    }
    
  }
)
    
    
                                         
    
    
                                                       
  
                                        
