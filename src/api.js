export async function fetchImages(breed) {
    const response = await fetch(
      `https://amiboapi.com/${breed}/images/random/12`
    );
    const data = await response.json();
    return data.message;
  }