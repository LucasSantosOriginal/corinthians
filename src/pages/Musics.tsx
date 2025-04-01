import { useEffect, useState } from "react";

const Musics = () => {
  const [player, setPlayer] = useState<any>(null);

  useEffect(() => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    (window as any).onYouTubeIframeAPIReady = () => {
      setPlayer(
        new (window as any).YT.Player("youtube-player", {
          videoId: "yJG5RLAZJPY",
          playerVars: {
            controls: 1,
            showinfo: 0,
            modestbranding: 1,
            rel: 0,
          },
          events: {
            onReady: (event: any) => {
              setPlayer(event.target);
            },
          },
        })
      );
    };
  }, []);

  const decreaseVolume = () => {
    if (player) {
      let currentVolume = player.getVolume();
      player.setVolume(Math.max(0, currentVolume - 10)); // Abaixa 10% do volume
    }
  };

  return (
    <div className="Container">
      <h1>Corinthians Anthem</h1>
      <div className="video-container">
        <div id="youtube-player"></div>
      </div>
      <button onClick={decreaseVolume}>Diminuir Volume 🔉</button>
    </div>
  );
};

export default Musics;
