package com.fitme.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.fitme.Repo.UserRepo;
import com.fitme.config.UserPrincipal;
import com.fitme.jwt.JwtUtils;
import com.fitme.model.User;
import com.fitme.model.response.Response;
import com.fitme.payload.JwtResponse;
import com.fitme.payload.LoginRequest;
import com.fitme.service.BatchService;
import com.fitme.service.DietService;
import com.fitme.service.SmtpMailSender;

@CrossOrigin()
@RestController
@RequestMapping("/fitme")
public class DietController {
	
	String batchExpiredStatus = "Expired";
	
	@Autowired
	SmtpMailSender smtpMailSender;
	
	@Autowired
	DietService dietService;
	
	@Autowired
	BatchService batchService;
	
	@Autowired
	UserRepo userRepo;
	
	@Autowired
	JwtUtils jwtUtils;
	
	@Autowired
	AuthenticationManager authenticationManager;
	
	@RequestMapping("/")
	public String login()
	{
		System.out.println("Entered");
		return "login sucessfully";
	}
	
	@PostMapping("/signUp")
	@ResponseBody
	public Response add(@RequestBody User user)
	{
		return new Response(dietService.addUser(user));
	}
	
	@PreAuthorize("hasAuthority('admin')")
	@RequestMapping("/admin")
	public String admin() {
		return "admin";
	}
	
	@PostMapping("/signin")
	public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));
		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwt = jwtUtils.generateJwtToken(authentication);
		UserPrincipal userDetails = (UserPrincipal) authentication.getPrincipal();	
		if(userDetails.getGroupsId()!= null)
			batchExpiredStatus = batchService.findIfBatchExpired(userDetails.getGroupsId().getBatch().getBatchId());
		return ResponseEntity.ok(new JwtResponse(jwt, 
												 userDetails.getId(),
												 userDetails.getUsername(),
												 userDetails.getEmail(),
												 userDetails.getUserType(),
												 batchExpiredStatus));
	}
	



}
