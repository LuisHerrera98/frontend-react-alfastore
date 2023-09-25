const fetchSizes = async (setSizes, id) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/size/sizes/${id}`
      );
      if (response.ok) {
        const data = await response.json();
        setSizes(data);
      } else {
        console.error("Error al obtener los talles");
      }
    } catch (error) {
      console.error("Error de red:", error);
    }
  };

  export default fetchSizes;