setInterval(() => {
  const d2 = "2023-06-02";
  const diffInMs = new Date(d2) - new Date();
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

  if (diffInMs > 0) {
    console.log(`faltam ${diffInDays}`);
  } else {
    console.log("Feliz Aniversário");
  }
},2000);

