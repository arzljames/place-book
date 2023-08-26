import {
  Title,
  Text,
  Container,
  Overlay,
  createStyles,
  rem,
} from "@mantine/core";
import Banner from "@/assets/banner.jpg";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    paddingTop: rem(200),
    paddingBottom: rem(200),
    backgroundImage: `url(${Banner})`,
    backgroundSize: "cover",
    backgroundPosition: "center",

    [theme.fn.smallerThan("xs")]: {
      paddingTop: rem(80),
      paddingBottom: rem(50),
    },
  },

  inner: {
    position: "relative",
    zIndex: 1,
  },

  title: {
    fontWeight: 800,
    fontSize: rem(40),
    letterSpacing: rem(-1),
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    color: theme.white,
    marginBottom: theme.spacing.xs,
    textAlign: "center",
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(28),
      textAlign: "left",
    },
  },

  highlight: {
    color: theme.colors[theme.primaryColor][4],
  },

  description: {
    color: theme.colors.gray[0],
    textAlign: "center",

    [theme.fn.smallerThan("xs")]: {
      fontSize: theme.fontSizes.md,
      textAlign: "left",
    },
  },
}));

function CatalogBanner() {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Find your perfect rest house to{" "}
          <Text component="span" inherit className={classes.highlight}>
            relax
          </Text>
        </Title>

        <Container size={640}>
          <Text size="md" className={classes.description}>
            Your home is more than just a place to live. Discover the
            possibilities with Placebook, your trusted partner in finding the
            perfect home.
          </Text>
        </Container>
      </div>
    </div>
  );
}

export default CatalogBanner;
