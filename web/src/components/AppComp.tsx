import {
  Box,
  Button,
  Card,
  Center,
  MantineProvider,
  ScrollArea,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";
import { fetchNui } from "../utils/fetchNui";

export default function AppComp() {
  const items = [ // All the items in the menu
    {
      item: 'WEAPON_COMBATPISTOL',
      title: 'Glock 45',
      description: 'En kraftfull pistol med hög precision.',
      image: 'https://s6.imgcdn.dev/mqMND.png',
    },
    {
      item: 'ammo-9',
      title: '9mm Ammo',
      description: 'En typ av ammunition för 9mm vapen.',
      image: 'https://s6.imgcdn.dev/mqhyw.png',
    },
    {
      item: 'WEAPON_STUNGUN',
      title: 'Tazer7',
      description: 'En elpistol för att bedöva måltavlor.',
      image: 'https://s6.imgcdn.dev/mqj2t.png',
    },
    {
      item: 'WEAPON_NIGHTSTICK',
      title: 'Batong',
      description: 'En batong för närstrid och säkerhet.',
      image: 'https://s6.imgcdn.dev/mquby.png',
    },
    {
      item: 'at_flashlight',
      title: 'Vapen Lampa',
      description: 'En stark lampa som fästs på vapnet.',
      image: 'https://s6.imgcdn.dev/mqwXT.png',
    },
    {
      item: 'WEAPON_SMG',
      title: 'MP5',
      description: 'En kompakt och kraftfull submachine gun.',
      image: 'https://s6.imgcdn.dev/mqcB9.png',
    },
  ];


  const handleBuy = (item: string) => {
    fetchNui("buyItem", { item });
  };

  return (
    <MantineProvider forceColorScheme="dark">
      <Box>
        <Center style={{ height: "100vh", flexDirection: "column" }}>
          <Card withBorder w={900} h={500}>
          <Center>
            <Title order={1} style={{ marginBottom: '20px' }}>
              Armory
            </Title>
          </Center>
            <ScrollArea style={{ height: '100%' }}>
              <SimpleGrid cols={3} spacing="md">
                {items.map((itemData, index) => (
                  <Card
                    key={index}
                    withBorder
                    style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}
                  >

                    <Card.Section>
                      <Center>
                        <img
                          src={itemData.image}
                          alt={itemData.title}
                          style={{
                            width: "40%",
                            height: "40%",
                            objectFit: "cover",
                          }}
                        />
                      </Center>
                    </Card.Section>

                    <Box>
                      <Text style={{ marginTop: "10px", textAlign: "center" }}>
                        {itemData.title}
                      </Text>
                      <Text size="sm" variant="dimmed" style={{ textAlign: "center" }}>
                        {itemData.description}
                      </Text>
                    </Box>

                    <Button
                      fullWidth
                      style={{ marginTop: "auto" }}
                      onClick={() => handleBuy(itemData.item)}
                    >
                      Buy Now
                    </Button>
                  </Card>
                ))}
              </SimpleGrid>
            </ScrollArea>
          </Card>
        </Center>
      </Box>
    </MantineProvider>
  );
}
