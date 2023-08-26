import { useState } from "react";
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Logo from "@/assets/branding.png";
import { APP_NAME } from "@/data/constant";

const HEADER_HEIGHT = rem(60);

const useStyles = createStyles((theme) => ({
  root: {
    position: "sticky",
    top: 0,
    zIndex: 2,
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px;",
  },

  dropdown: {
    position: "absolute",
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,
    position: "relative",
    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },

    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },

  linkBadge: {
    position: "absolute",
    content: '""',
    width: "1.2rem",
    height: "1.2rem",
    background: "#f53b57",
    borderRadius: "100%",
    color: "#fff",
    fontSize: "10px",
    fontWeight: "normal",
    right: -5,
    top: -5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

interface HeaderResponsiveProps {
  links: { label: string; my_booked?: boolean }[];
}

const Navbar = ({ links }: HeaderResponsiveProps) => {
  const [opened, { toggle, close }] = useDisclosure(false);
  const { classes, cx } = useStyles();
  const totalBooked: number | null | undefined = null;

  const items = links.map(({ label, my_booked = false }) => (
    <a
      href="#"
      key={label}
      className={cx(classes.link, {
        [classes.linkActive]: my_booked === false,
      })}
      onClick={(event) => {
        event.preventDefault();
        close();
      }}
    >
      {label}
      {my_booked && <div className={classes.linkBadge}>{totalBooked ?? 0}</div>}
    </a>
  ));

  return (
    <Header height={HEADER_HEIGHT} className={classes.root}>
      <Container className={classes.header}>
        <img
          src={Logo}
          width={150}
          style={{ cursor: "pointer" }}
          alt={APP_NAME}
        />
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>

        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
};

export default Navbar;
