import {
  createStyles,
  Image,
  Card,
  Text,
  Group,
  Button,
  getStylesRef,
  rem,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { AiOutlineStar } from "react-icons/ai";
import { ICatalog } from "@/interfaces";
import _ from "lodash";

const useStyles = createStyles((theme) => ({
  price: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },

  carousel: {
    "&:hover": {
      [`& .${getStylesRef("carouselControls")}`]: {
        opacity: 1,
      },
    },
  },

  carouselControls: {
    ref: getStylesRef("carouselControls"),
    transition: "opacity 150ms ease",
    opacity: 0,
  },

  carouselIndicator: {
    width: rem(4),
    height: rem(4),
    transition: "width 250ms ease",

    "&[data-active]": {
      width: rem(16),
    },
  },

  star: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1,
    cursor: "pointer",
  },
}));

function CatalogCard({ data }: { data: ICatalog }) {
  const { classes } = useStyles();

  const slides = _.map(data.images, (image) => (
    <Carousel.Slide key={image}>
      <Image src={image} height={220} />
    </Carousel.Slide>
  ));

  return (
    <Card style={{ height: "100%" }} radius="md" withBorder padding="xl">
      <Card.Section style={{ position: "relative" }}>
        <div className={classes.star}>
          <AiOutlineStar color="#fff" size={24} />
          {/* <AiFillStar color="#ffeaa7" size={24} /> */}
        </div>
        <Carousel
          withIndicators
          loop
          classNames={{
            root: classes.carousel,
            controls: classes.carouselControls,
            indicator: classes.carouselIndicator,
          }}
        >
          {slides}
        </Carousel>
      </Card.Section>

      <Group position="left" mt="lg">
        <Text fw={500} fz="lg">
          {data.name}
        </Text>
      </Group>

      <Group position="apart">
        <Text fz="sm" c="dimmed">
          {data.km_away} km away
        </Text>
      </Group>

      <Group position="apart" mt="sm">
        <div>
          <Text fz="xl" span fw={500} className={classes.price}>
            {data.price}$
          </Text>
          <Text span fz="sm" c="dimmed">
            {" "}
            / night
          </Text>
        </div>

        <Button radius="md">Book now</Button>
      </Group>
    </Card>
  );
}

export default CatalogCard;
