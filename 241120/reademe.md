/_ Restfull API 방식을 사용하지 않은 경우! _/

/ -> Home
/join -> Join
/login -> Login
/search -> Search

/edit-user -> Edit User
/delete-user -> Deelete User

/watch-video -> Watch Video
/edit-video -> Edit Video
/delete-video -> Delete Video

/_ RestFull API 방식을 사용한 경우! _/

/ 글로벌 라우터(동적 라우팅을 갖지 않음)
/ -> Home
/join -> Join
/login -> Login
/search -> Search

/ users로 시작하는 페이지 라우팅 => 라우터
/users/edit -> Edit User
/users/delete -> Deelete User

/ video로 시작하는 페이지 라우팅 => 라우터
/video/watch -> Watch Video
/video/edit -> Edit Video
/video/delete -> Delete Video
/video/comments -> Comment Video
/video/comments/delete -> Delete Comment
