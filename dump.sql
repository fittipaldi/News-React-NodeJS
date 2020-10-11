-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 11, 2020 at 03:18 PM
-- Server version: 10.1.34-MariaDB
-- PHP Version: 7.0.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Database: `bbc`
--

-- --------------------------------------------------------

--
-- Table structure for table `country`
--

CREATE TABLE `country` (
  `id` int(11) NOT NULL,
  `country_name` varchar(255) NOT NULL,
  `country_code` varchar(50) NOT NULL,
  `status` enum('0','1') NOT NULL DEFAULT '1',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `country`
--

INSERT INTO `country` (`id`, `country_name`, `country_code`, `status`, `updated_at`) VALUES
(1, 'Afghanistan', 'af', '0', '2020-10-11 12:59:55'),
(2, 'Albania', 'al', '0', '2020-10-11 12:59:55'),
(3, 'Algeria', 'dz', '0', '2020-10-11 12:59:55'),
(4, 'AmericanSamoa', 'as', '0', '2020-10-11 12:59:55'),
(5, 'Andorra', 'ad', '0', '2020-10-11 12:59:55'),
(6, 'Angola', 'ao', '0', '2020-10-11 12:59:55'),
(7, 'Anguilla', 'ai', '0', '2020-10-11 12:59:55'),
(8, 'Antarctica', 'aq', '0', '2020-10-11 12:59:55'),
(9, 'AntiguaandBarbuda', 'ag', '0', '2020-10-11 12:59:55'),
(10, 'Argentina', 'ar', '0', '2020-10-11 12:59:55'),
(11, 'Armenia', 'am', '0', '2020-10-11 12:59:55'),
(12, 'Aruba', 'aw', '0', '2020-10-11 12:59:55'),
(13, 'Australia', 'au', '1', '2020-10-11 12:59:55'),
(14, 'Austria', 'at', '0', '2020-10-11 12:59:55'),
(15, 'Azerbaijan', 'az', '0', '2020-10-11 12:59:55'),
(16, 'Bahamas(the)', 'bs', '0', '2020-10-11 12:59:55'),
(17, 'Bahrain', 'bh', '0', '2020-10-11 12:59:55'),
(18, 'Bangladesh', 'bd', '0', '2020-10-11 12:59:55'),
(19, 'Barbados', 'bb', '0', '2020-10-11 12:59:55'),
(20, 'Belarus', 'by', '0', '2020-10-11 12:59:55'),
(21, 'Belgium', 'be', '0', '2020-10-11 12:59:55'),
(22, 'Belize', 'bz', '0', '2020-10-11 12:59:55'),
(23, 'Benin', 'bj', '0', '2020-10-11 12:59:55'),
(24, 'Bermuda', 'bm', '0', '2020-10-11 12:59:55'),
(25, 'Bhutan', 'bt', '0', '2020-10-11 12:59:55'),
(26, 'Bolivia(PlurinationalStateof)', 'bo', '0', '2020-10-11 12:59:55'),
(27, 'Bonaire,SintEustatiusandSaba', 'bq', '0', '2020-10-11 12:59:55'),
(28, 'BosniaandHerzegovina', 'ba', '0', '2020-10-11 12:59:55'),
(29, 'Botswana', 'bw', '0', '2020-10-11 12:59:55'),
(30, 'BouvetIsland', 'bv', '0', '2020-10-11 12:59:55'),
(31, 'Brazil', 'br', '0', '2020-10-11 12:59:55'),
(32, 'BritishIndianOceanTerritory(the)', 'io', '0', '2020-10-11 12:59:55'),
(33, 'BruneiDarussalam', 'bn', '0', '2020-10-11 12:59:55'),
(34, 'Bulgaria', 'bg', '0', '2020-10-11 12:59:55'),
(35, 'BurkinaFaso', 'bf', '0', '2020-10-11 12:59:55'),
(36, 'Burundi', 'bi', '0', '2020-10-11 12:59:55'),
(37, 'CaboVerde', 'cv', '0', '2020-10-11 12:59:55'),
(38, 'Cambodia', 'kh', '0', '2020-10-11 12:59:55'),
(39, 'Cameroon', 'cm', '0', '2020-10-11 12:59:55'),
(40, 'Canada', 'ca', '0', '2020-10-11 12:59:55'),
(41, 'CaymanIslands(the)', 'ky', '0', '2020-10-11 12:59:55'),
(42, 'CentralAfricanRepublic(the)', 'cf', '0', '2020-10-11 12:59:55'),
(43, 'Chad', 'td', '0', '2020-10-11 12:59:55'),
(44, 'Chile', 'cl', '0', '2020-10-11 12:59:55'),
(45, 'China', 'cn', '0', '2020-10-11 12:59:55'),
(46, 'ChristmasIsland', 'cx', '0', '2020-10-11 12:59:55'),
(47, 'Cocos(Keeling)Islands(the)', 'cc', '0', '2020-10-11 12:59:55'),
(48, 'Colombia', 'co', '0', '2020-10-11 12:59:55'),
(49, 'Comoros(the)', 'km', '0', '2020-10-11 12:59:55'),
(50, 'Congo(theDemocraticRepublicofthe)', 'cd', '0', '2020-10-11 12:59:55'),
(51, 'Congo(the)', 'cg', '0', '2020-10-11 12:59:55'),
(52, 'CookIslands(the)', 'ck', '0', '2020-10-11 12:59:55'),
(53, 'CostaRica', 'cr', '0', '2020-10-11 12:59:55'),
(54, 'Croatia', 'hr', '0', '2020-10-11 12:59:55'),
(55, 'Cuba', 'cu', '0', '2020-10-11 12:59:55'),
(56, 'Curaçao', 'cw', '0', '2020-10-11 12:59:55'),
(57, 'Cyprus', 'cy', '0', '2020-10-11 12:59:55'),
(58, 'Czechia', 'cz', '0', '2020-10-11 12:59:55'),
(59, 'CôtedIvoire', 'ci', '0', '2020-10-11 12:59:55'),
(60, 'Denmark', 'dk', '0', '2020-10-11 12:59:55'),
(61, 'Djibouti', 'dj', '0', '2020-10-11 12:59:55'),
(62, 'Dominica', 'dm', '0', '2020-10-11 12:59:55'),
(63, 'DominicanRepublic(the)', 'do', '0', '2020-10-11 12:59:55'),
(64, 'Ecuador', 'ec', '0', '2020-10-11 12:59:55'),
(65, 'Egypt', 'eg', '0', '2020-10-11 12:59:55'),
(66, 'ElSalvador', 'sv', '0', '2020-10-11 12:59:55'),
(67, 'EquatorialGuinea', 'gq', '0', '2020-10-11 12:59:55'),
(68, 'Eritrea', 'er', '0', '2020-10-11 12:59:55'),
(69, 'Estonia', 'ee', '0', '2020-10-11 12:59:55'),
(70, 'Eswatini', 'sz', '0', '2020-10-11 12:59:55'),
(71, 'Ethiopia', 'et', '0', '2020-10-11 12:59:55'),
(72, 'FalklandIslands(the)[Malvinas]', 'fk', '0', '2020-10-11 12:59:55'),
(73, 'FaroeIslands(the)', 'fo', '0', '2020-10-11 12:59:55'),
(74, 'Fiji', 'fj', '0', '2020-10-11 12:59:55'),
(75, 'Finland', 'fi', '0', '2020-10-11 12:59:55'),
(76, 'France', 'fr', '1', '2020-10-11 12:59:55'),
(77, 'FrenchGuiana', 'gf', '0', '2020-10-11 12:59:55'),
(78, 'FrenchPolynesia', 'pf', '0', '2020-10-11 12:59:55'),
(79, 'FrenchSouthernTerritories(the)', 'tf', '0', '2020-10-11 12:59:55'),
(80, 'Gabon', 'ga', '0', '2020-10-11 12:59:55'),
(81, 'Gambia(the)', 'gm', '0', '2020-10-11 12:59:55'),
(82, 'Georgia', 'ge', '0', '2020-10-11 12:59:55'),
(83, 'Germany', 'de', '0', '2020-10-11 12:59:55'),
(84, 'Ghana', 'gh', '0', '2020-10-11 12:59:55'),
(85, 'Gibraltar', 'gi', '0', '2020-10-11 12:59:55'),
(86, 'Greece', 'gr', '0', '2020-10-11 12:59:56'),
(87, 'Greenland', 'gl', '0', '2020-10-11 12:59:56'),
(88, 'Grenada', 'gd', '0', '2020-10-11 12:59:56'),
(89, 'Guadeloupe', 'gp', '0', '2020-10-11 12:59:56'),
(90, 'Guam', 'gu', '0', '2020-10-11 12:59:56'),
(91, 'Guatemala', 'gt', '0', '2020-10-11 12:59:56'),
(92, 'Guernsey', 'gg', '0', '2020-10-11 12:59:56'),
(93, 'Guinea', 'gn', '0', '2020-10-11 12:59:56'),
(94, 'Guinea-Bissau', 'gw', '0', '2020-10-11 12:59:56'),
(95, 'Guyana', 'gy', '0', '2020-10-11 12:59:56'),
(96, 'Haiti', 'ht', '0', '2020-10-11 12:59:56'),
(97, 'HeardIslandandMcDonaldIslands', 'hm', '0', '2020-10-11 12:59:56'),
(98, 'HolySee(the)', 'va', '0', '2020-10-11 12:59:56'),
(99, 'Honduras', 'hn', '0', '2020-10-11 12:59:56'),
(100, 'HongKong', 'hk', '0', '2020-10-11 12:59:56'),
(101, 'Hungary', 'hu', '0', '2020-10-11 12:59:56'),
(102, 'Iceland', 'is', '0', '2020-10-11 12:59:56'),
(103, 'India', 'in', '1', '2020-10-11 12:59:56'),
(104, 'Indonesia', 'id', '0', '2020-10-11 12:59:56'),
(105, 'Iran(IslamicRepublicof)', 'ir', '0', '2020-10-11 12:59:56'),
(106, 'Iraq', 'iq', '0', '2020-10-11 12:59:56'),
(107, 'Ireland', 'ie', '0', '2020-10-11 12:59:56'),
(108, 'IsleofMan', 'im', '0', '2020-10-11 12:59:56'),
(109, 'Israel', 'il', '0', '2020-10-11 12:59:56'),
(110, 'Italy', 'it', '0', '2020-10-11 12:59:56'),
(111, 'Jamaica', 'jm', '0', '2020-10-11 12:59:56'),
(112, 'Japan', 'jp', '0', '2020-10-11 12:59:56'),
(113, 'Jersey', 'je', '0', '2020-10-11 12:59:56'),
(114, 'Jordan', 'jo', '0', '2020-10-11 12:59:56'),
(115, 'Kazakhstan', 'kz', '0', '2020-10-11 12:59:56'),
(116, 'Kenya', 'ke', '0', '2020-10-11 12:59:56'),
(117, 'Kiribati', 'ki', '0', '2020-10-11 12:59:56'),
(118, 'Korea(theDemocraticPeoplesRepublicof)', 'kp', '0', '2020-10-11 12:59:56'),
(119, 'Korea(theRepublicof)', 'kr', '0', '2020-10-11 12:59:56'),
(120, 'Kuwait', 'kw', '0', '2020-10-11 12:59:56'),
(121, 'Kyrgyzstan', 'kg', '0', '2020-10-11 12:59:56'),
(122, 'LaoPeople sDemocraticRepublic(the)', 'la', '0', '2020-10-11 12:59:56'),
(123, 'Latvia', 'lv', '0', '2020-10-11 12:59:56'),
(124, 'Lebanon', 'lb', '0', '2020-10-11 12:59:56'),
(125, 'Lesotho', 'ls', '0', '2020-10-11 12:59:56'),
(126, 'Liberia', 'lr', '0', '2020-10-11 12:59:56'),
(127, 'Libya', 'ly', '0', '2020-10-11 12:59:56'),
(128, 'Liechtenstein', 'li', '0', '2020-10-11 12:59:56'),
(129, 'Lithuania', 'lt', '0', '2020-10-11 12:59:56'),
(130, 'Luxembourg', 'lu', '0', '2020-10-11 12:59:56'),
(131, 'Macao', 'mo', '0', '2020-10-11 12:59:56'),
(132, 'Madagascar', 'mg', '0', '2020-10-11 12:59:56'),
(133, 'Malawi', 'mw', '0', '2020-10-11 12:59:56'),
(134, 'Malaysia', 'my', '0', '2020-10-11 12:59:56'),
(135, 'Maldives', 'mv', '0', '2020-10-11 12:59:56'),
(136, 'Mali', 'ml', '0', '2020-10-11 12:59:56'),
(137, 'Malta', 'mt', '0', '2020-10-11 12:59:56'),
(138, 'MarshallIslands(the)', 'mh', '0', '2020-10-11 12:59:56'),
(139, 'Martinique', 'mq', '0', '2020-10-11 12:59:56'),
(140, 'Mauritania', 'mr', '0', '2020-10-11 12:59:56'),
(141, 'Mauritius', 'mu', '0', '2020-10-11 12:59:56'),
(142, 'Mayotte', 'yt', '0', '2020-10-11 12:59:56'),
(143, 'Mexico', 'mx', '0', '2020-10-11 12:59:56'),
(144, 'Micronesia(FederatedStatesof)', 'fm', '0', '2020-10-11 12:59:56'),
(145, 'Moldova(theRepublicof)', 'md', '0', '2020-10-11 12:59:56'),
(146, 'Monaco', 'mc', '0', '2020-10-11 12:59:56'),
(147, 'Mongolia', 'mn', '0', '2020-10-11 12:59:56'),
(148, 'Montenegro', 'me', '0', '2020-10-11 12:59:56'),
(149, 'Montserrat', 'ms', '0', '2020-10-11 12:59:56'),
(150, 'Morocco', 'ma', '0', '2020-10-11 12:59:56'),
(151, 'Mozambique', 'mz', '0', '2020-10-11 12:59:56'),
(152, 'Myanmar', 'mm', '0', '2020-10-11 12:59:56'),
(153, 'Namibia', 'na', '0', '2020-10-11 12:59:56'),
(154, 'Nauru', 'nr', '0', '2020-10-11 12:59:56'),
(155, 'Nepal', 'np', '0', '2020-10-11 12:59:56'),
(156, 'Netherlands(the)', 'nl', '0', '2020-10-11 12:59:56'),
(157, 'NewCaledonia', 'nc', '0', '2020-10-11 12:59:56'),
(158, 'NewZealand', 'nz', '0', '2020-10-11 12:59:56'),
(159, 'Nicaragua', 'ni', '0', '2020-10-11 12:59:56'),
(160, 'Niger(the)', 'ne', '0', '2020-10-11 12:59:56'),
(161, 'Nigeria', 'ng', '0', '2020-10-11 12:59:56'),
(162, 'Niue', 'nu', '0', '2020-10-11 12:59:56'),
(163, 'NorfolkIsland', 'nf', '0', '2020-10-11 12:59:56'),
(164, 'NorthernMarianaIslands(the)', 'mp', '0', '2020-10-11 12:59:56'),
(165, 'Norway', 'no', '0', '2020-10-11 12:59:56'),
(166, 'Oman', 'om', '0', '2020-10-11 12:59:56'),
(167, 'Pakistan', 'pk', '0', '2020-10-11 12:59:56'),
(168, 'Palau', 'pw', '0', '2020-10-11 12:59:56'),
(169, 'Palestine,Stateof', 'ps', '0', '2020-10-11 12:59:56'),
(170, 'Panama', 'pa', '0', '2020-10-11 12:59:56'),
(171, 'PapuaNewGuinea', 'pg', '0', '2020-10-11 12:59:56'),
(172, 'Paraguay', 'py', '0', '2020-10-11 12:59:56'),
(173, 'Peru', 'pe', '0', '2020-10-11 12:59:56'),
(174, 'Philippines(the)', 'ph', '0', '2020-10-11 12:59:56'),
(175, 'Pitcairn', 'pn', '0', '2020-10-11 12:59:56'),
(176, 'Poland', 'pl', '0', '2020-10-11 12:59:56'),
(177, 'Portugal', 'pt', '0', '2020-10-11 12:59:56'),
(178, 'PuertoRico', 'pr', '0', '2020-10-11 12:59:56'),
(179, 'Qatar', 'qa', '0', '2020-10-11 12:59:56'),
(180, 'RepublicofNorthMacedonia', 'mk', '0', '2020-10-11 12:59:56'),
(181, 'Romania', 'ro', '0', '2020-10-11 12:59:56'),
(182, 'RussianFederation(the)', 'ru', '0', '2020-10-11 12:59:56'),
(183, 'Rwanda', 'rw', '0', '2020-10-11 12:59:56'),
(184, 'Réunion', 're', '0', '2020-10-11 12:59:56'),
(185, 'SaintBarthélemy', 'bl', '0', '2020-10-11 12:59:56'),
(186, 'SaintHelena,AscensionandTristandaCunha', 'sh', '0', '2020-10-11 12:59:56'),
(187, 'SaintKittsandNevis', 'kn', '0', '2020-10-11 12:59:56'),
(188, 'SaintLucia', 'lc', '0', '2020-10-11 12:59:56'),
(189, 'SaintMartin(Frenchpart)', 'mf', '0', '2020-10-11 12:59:56'),
(190, 'SaintPierreandMiquelon', 'pm', '0', '2020-10-11 12:59:56'),
(191, 'SaintVincentandtheGrenadines', 'vc', '0', '2020-10-11 12:59:56'),
(192, 'Samoa', 'ws', '0', '2020-10-11 12:59:56'),
(193, 'SanMarino', 'sm', '0', '2020-10-11 12:59:56'),
(194, 'SaoTomeandPrincipe', 'st', '0', '2020-10-11 12:59:56'),
(195, 'SaudiArabia', 'sa', '0', '2020-10-11 12:59:56'),
(196, 'Senegal', 'sn', '0', '2020-10-11 12:59:56'),
(197, 'Serbia', 'rs', '0', '2020-10-11 12:59:56'),
(198, 'Seychelles', 'sc', '0', '2020-10-11 12:59:56'),
(199, 'SierraLeone', 'sl', '0', '2020-10-11 12:59:56'),
(200, 'Singapore', 'sg', '0', '2020-10-11 12:59:56'),
(201, 'SintMaarten(Dutchpart)', 'sx', '0', '2020-10-11 12:59:56'),
(202, 'Slovakia', 'sk', '0', '2020-10-11 12:59:56'),
(203, 'Slovenia', 'si', '0', '2020-10-11 12:59:56'),
(204, 'SolomonIslands', 'sb', '0', '2020-10-11 12:59:56'),
(205, 'Somalia', 'so', '0', '2020-10-11 12:59:56'),
(206, 'SouthAfrica', 'za', '0', '2020-10-11 12:59:56'),
(207, 'SouthGeorgiaandtheSouthSandwichIslands', 'gs', '0', '2020-10-11 12:59:56'),
(208, 'SouthSudan', 'ss', '0', '2020-10-11 12:59:56'),
(209, 'Spain', 'es', '0', '2020-10-11 12:59:56'),
(210, 'SriLanka', 'lk', '0', '2020-10-11 12:59:56'),
(211, 'Sudan(the)', 'sd', '0', '2020-10-11 12:59:56'),
(212, 'Suriname', 'sr', '0', '2020-10-11 12:59:56'),
(213, 'SvalbardandJanMayen', 'sj', '0', '2020-10-11 12:59:56'),
(214, 'Sweden', 'se', '0', '2020-10-11 12:59:56'),
(215, 'Switzerland', 'ch', '0', '2020-10-11 12:59:56'),
(216, 'SyrianArabRepublic', 'sy', '0', '2020-10-11 12:59:56'),
(217, 'Taiwan(ProvinceofChina)', 'tw', '0', '2020-10-11 12:59:56'),
(218, 'Tajikistan', 'tj', '0', '2020-10-11 12:59:56'),
(219, 'Tanzania,UnitedRepublicof', 'tz', '0', '2020-10-11 12:59:56'),
(220, 'Thailand', 'th', '0', '2020-10-11 12:59:56'),
(221, 'Timor-Leste', 'tl', '0', '2020-10-11 12:59:56'),
(222, 'Togo', 'tg', '0', '2020-10-11 12:59:56'),
(223, 'Tokelau', 'tk', '0', '2020-10-11 12:59:56'),
(224, 'Tonga', 'to', '0', '2020-10-11 12:59:56'),
(225, 'TrinidadandTobago', 'tt', '0', '2020-10-11 12:59:56'),
(226, 'Tunisia', 'tn', '0', '2020-10-11 12:59:56'),
(227, 'Turkey', 'tr', '0', '2020-10-11 12:59:56'),
(228, 'Turkmenistan', 'tm', '0', '2020-10-11 12:59:56'),
(229, 'TurksandCaicosIslands(the)', 'tc', '0', '2020-10-11 12:59:56'),
(230, 'Tuvalu', 'tv', '0', '2020-10-11 12:59:56'),
(231, 'Uganda', 'ug', '0', '2020-10-11 12:59:56'),
(232, 'Ukraine', 'ua', '0', '2020-10-11 12:59:56'),
(233, 'UnitedArabEmirates(the)', 'ae', '0', '2020-10-11 12:59:56'),
(234, 'United Kingdom ', 'gb', '1', '2020-10-11 12:59:56'),
(235, 'UnitedStatesMinorOutlyingIslands(the)', 'um', '0', '2020-10-11 12:59:56'),
(236, 'United States', 'us', '1', '2020-10-11 12:59:56'),
(237, 'Uruguay', 'uy', '0', '2020-10-11 12:59:56'),
(238, 'Uzbekistan', 'uz', '0', '2020-10-11 12:59:56'),
(239, 'Vanuatu', 'vu', '0', '2020-10-11 12:59:56'),
(240, 'Venezuela(BolivarianRepublicof)', 've', '0', '2020-10-11 12:59:56'),
(241, 'VietNam', 'vn', '0', '2020-10-11 12:59:56'),
(242, 'VirginIslands(British)', 'vg', '0', '2020-10-11 12:59:56'),
(243, 'VirginIslands(U.S.)', 'vi', '0', '2020-10-11 12:59:56'),
(244, 'WallisandFutuna', 'wf', '0', '2020-10-11 12:59:56'),
(245, 'WesternSahara', 'eh', '0', '2020-10-11 12:59:56'),
(246, 'Yemen', 'ye', '0', '2020-10-11 12:59:56'),
(247, 'Zambia', 'zm', '0', '2020-10-11 12:59:56'),
(248, 'Zimbabwe', 'zw', '0', '2020-10-11 12:59:56'),
(249, 'ÅlandIslands', 'ax', '0', '2020-10-11 12:59:56');

-- --------------------------------------------------------

--
-- Table structure for table `token`
--

CREATE TABLE `token` (
  `id` int(11) NOT NULL,
  `token` varchar(100) NOT NULL,
  `status` enum('0','1') NOT NULL DEFAULT '1',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `token`
--

INSERT INTO `token` (`id`, `token`, `status`, `updated_at`) VALUES
(1, 'JhRpgUjeShbs2M65XfbyUUeZH9MkDkLY', '1', '2020-09-17 19:15:11');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `country`
--
ALTER TABLE `country`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `country_name` (`country_name`),
  ADD UNIQUE KEY `country_code` (`country_code`);

--
-- Indexes for table `token`
--
ALTER TABLE `token`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `token` (`token`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `country`
--
ALTER TABLE `country`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=250;

--
-- AUTO_INCREMENT for table `token`
--
ALTER TABLE `token`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;
