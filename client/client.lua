RegisterNUICallback('buyItem', function(data, cb)
  local item = data.item

  print('Buying item:', item)

  TriggerServerEvent('armory:addItemToInventory', item)

  cb('Item purchased')
end)

local function OpenNui(arg)
  SetNuiFocus(arg, arg)
  SendNUIMessage({
    action = 'setVisible',
    data = arg
  })
end

RegisterCommand('open-ui', function()
  OpenNui(true)
end)

RegisterNUICallback('hide-ui', function(_, cb)
  OpenNui(false)
  cb({})
end)

function OpenArmoryMenu()
  SetNuiFocus(true, true)
  SendNUIMessage({ action = 'setVisible', data = true })
end