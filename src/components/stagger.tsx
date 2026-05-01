const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2, // delay between items
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
}

export { container, item }