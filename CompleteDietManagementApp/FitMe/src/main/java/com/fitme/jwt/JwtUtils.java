package com.fitme.jwt;

import java.util.Calendar;
import java.util.Date;
import java.util.function.Function;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import com.fitme.config.UserPrincipal;

import io.jsonwebtoken.*;

@Component
public class JwtUtils {
	
	private static final Logger logger = LoggerFactory.getLogger(JwtUtils.class);
	
	@Value("${fitme.app.jwtSecret}")
	private String jwtSecret;
	
	@Value("${fitme.app.jwtExpirationMinute}")
	private int jwtExpirationMinute;
	

//retrieve expiration date from jwt token
	public Date getExpirationDateFromToken(String token) {
	return getClaimFromToken(token, Claims::getExpiration);
	}
	
	//retrieve issued date from jwt token
		public Date getIssuedDateFromToken(String token) {
		return getClaimFromToken(token, Claims::getIssuedAt);
		}

public <T> T getClaimFromToken(String token, Function<Claims, T> claimsResolver) {
final Claims claims = getAllClaimsFromToken(token);
return claimsResolver.apply(claims);
}


//for retrieving any information from token we will need the secret key
private Claims getAllClaimsFromToken(String token) {
return Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(token).getBody();
}
	


	public String generateJwtToken(Authentication authentication) {
		
		UserPrincipal userPrincipal =  (UserPrincipal) authentication.getPrincipal();
		Calendar c = Calendar.getInstance();
		Date issued = c.getTime();
		c.add(Calendar.MINUTE, jwtExpirationMinute);
		Date expiry = c.getTime();
		return Jwts.builder()
				.setSubject(userPrincipal.getUsername())
				.setIssuedAt(issued)
				.setExpiration(expiry)
				.signWith(SignatureAlgorithm.HS512, jwtSecret)
				.compact();
		
	}
	
	public String getUserNameFromJwtToken(String token) {
		return Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(token).getBody().getSubject();
	}

	public boolean validateJwtToken(String authToken) {
		try {
			Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(authToken);
//			System.out.println(getExpirationDateFromToken(authToken));
//			System.out.println(getIssuedDateFromToken(authToken));
			return true;
		} catch (SignatureException e) {
			logger.error("Invalid JWT signature: {}", e.getMessage());
		} catch (MalformedJwtException e) {
			logger.error("Invalid JWT token: {}", e.getMessage());
		} catch (ExpiredJwtException e) {
			logger.error("JWT token is expired: {}", e.getMessage());
		} catch (UnsupportedJwtException e) {
			logger.error("JWT token is unsupported: {}", e.getMessage());
		} catch (IllegalArgumentException e) {
			logger.error("JWT claims string is empty: {}", e.getMessage());
		}

		return false;
		
		
		
	}
	
	
	}
