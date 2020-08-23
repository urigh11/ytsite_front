import React, { useState, useEffect } from "react";

import {
  MainContainer,
  Content,
  AdTablet,
  // AdUnitRectangle,
  AdMobile,
  MainText,
  Search,
  SearchBar,
} from "./Main.style";
import Videos from "../Videos/Videos.component";
import Pagination from "../Pagination/Pagination.component";
import { GoSearch } from "react-icons/go";

const Main = ({ videos }) => {
  const [filteredVideos, setFilteredVideos] = useState(videos);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [videosPerPage] = useState(16);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setLoading(true);
    setFilteredVideos(
      [...videos].filter((video) =>
        video.title.toLowerCase().includes(search.toLowerCase())
      )
    );
    setLoading(false);
    setCurrentPage(1);
  }, [search, videos]);

  // Get current videos
  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentFilteredVideos = filteredVideos.slice(
    indexOfFirstVideo,
    indexOfLastVideo
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <MainContainer>
      <MainText>
        Welcome
      </MainText>

      <AdMobile>
        <iframe
          title="mobile_banner"
          src="//www.topdisplaynetwork.com/watchnew?key=bd18cd9f3b2bfaa7001886c11bbf51ef"
          width="320"
          height="50"
          frameborder="0"
          scrolling="no"
        ></iframe>
      </AdMobile>

      <AdTablet>
        <iframe
          title="desktop_banner"
          src="//www.topdisplaynetwork.com/watchnew?key=fb88a499e07584b47564179548308523"
          width="728"
          height="90"
          frameborder="0"
          scrolling="no"
        ></iframe>
      </AdTablet>

      <Search>
        <GoSearch
          style={{
            marginLeft: "1rem",
            position: "absolute",
            color: "white",
          }}
          size="1.5em"
        />
        <SearchBar
          type="text"
          placeholder="Busca"
          onChange={(e) => setSearch(e.target.value)}
        />
      </Search>
      <Content>
        <Videos videos={currentFilteredVideos} loading={loading} />
        <AdTablet>
          <iframe
            title="mobile_banner"
            src="https://www.topdisplaynetwork.com/watchnew?key=125b9aafbde90afa709434287e9a3ee1"
            width="160"
            height="600"
            frameborder="0"
            scrolling="no"
          ></iframe>
        </AdTablet>
      </Content>

      <AdMobile>
        <iframe
          title="mobile_banner"
          src="//www.topdisplaynetwork.com/watchnew?key=bd18cd9f3b2bfaa7001886c11bbf51ef"
          width="320"
          height="50"
          frameborder="0"
          scrolling="no"
        ></iframe>
      </AdMobile>

      <Pagination
        videosPerPage={videosPerPage}
        totalVideos={filteredVideos.length}
        paginate={paginate}
      />

      <AdMobile>
        <iframe
          title="mobile_banner"
          src="//www.topdisplaynetwork.com/watchnew?key=bd18cd9f3b2bfaa7001886c11bbf51ef"
          width="320"
          height="50"
          frameborder="0"
          scrolling="no"
        ></iframe>
      </AdMobile>

      <AdTablet>
        <iframe
          title="desktop_banner"
          src="//www.topdisplaynetwork.com/watchnew?key=fb88a499e07584b47564179548308523"
          width="728"
          height="90"
          frameborder="0"
          scrolling="no"
        ></iframe>
      </AdTablet>

      <AdTablet>
        <iframe
          title="squared_banner"
          src="//www.topdisplaynetwork.com/watchnew?key=4d00edeb5e29120a67095839cfb12c33"
          width="300"
          height="250"
          frameborder="0"
          scrolling="no"
        ></iframe>
      </AdTablet>
    </MainContainer>
  );
};

export default Main;
