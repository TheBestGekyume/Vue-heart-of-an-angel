CREATE TABLE `poemas` (
 `title_poem` varchar(18) NOT NULL,
 `image_poem` varchar(255) NOT NULL,
 `date_poem` timestamp NOT NULL DEFAULT current_timestamp(),
 `tex_poem` text NOT NULL,
 `descricao_poem` varchar(24) DEFAULT NULL,
 `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4