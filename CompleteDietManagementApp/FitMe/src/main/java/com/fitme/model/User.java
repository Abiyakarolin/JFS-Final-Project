package com.fitme.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class User implements Serializable {
	
	private static final long serialVersionUID = -7456620372275307758L;

	@Id
	//@Column(name="userId")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	@GenericGenerator
//    (
//	        name = "name_seq", 
//	        strategy = "com.pronto.util.hibernate.ProntoPersistJustUsedGenerator", 
//	        parameters = {
//	        		@Parameter(name = "StringPrefixedSequenceIdGenerator.INCREMENT_PARAM", value = "50"),
//	        		@Parameter(name = "StringPrefixedSequenceIdGenerator.VALUE_PREFIX_PARAMETER", value = "U_"),
//	        		@Parameter(name = "StringPrefixedSequenceIdGenerator.NUMBER_FORMAT_PARAMETER", value = "%05d")		
//	        })
	        		
	private int userId;
	private String fullname;
	private int age;
	private String gender;
	private int mobile;
	private String email;
	private String address;
	private String city;
	private String state;
	private String country;
	private int pincode;
	private int height;
	private int weight;
	private int bmi;
	private String reason;
	private String medicalCondition;
	private String dietaryRestriction;
	private String dietaryCustom;
	private String pregnantStatus;
	private String referralCode;
	private String password;
	private String userType;
	private String friendsReferralCode;
	private boolean isApproved;
	
	
	@ManyToOne(fetch = FetchType.EAGER)
	private Groups groupsId;
	
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getFullname() {
		return fullname;
	}
	public void setFullname(String fullname) {
		this.fullname = fullname;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public int getMobile() {
		return mobile;
	}
	public void setMobile(int mobile) {
		this.mobile = mobile;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public int getPincode() {
		return pincode;
	}
	public void setPincode(int pincode) {
		this.pincode = pincode;
	}
	public int getHeight() {
		return height;
	}
	public void setHeight(int height) {
		this.height = height;
	}
	public int getWeight() {
		return weight;
	}
	public void setWeight(int weight) {
		this.weight = weight;
	}
	public int getBmi() {
		return bmi;
	}
	public void setBmi(int bmi) {
		this.bmi = bmi;
	}
	public String getReason() {
		return reason;
	}
	public void setReason(String reason) {
		this.reason = reason;
	}
	public String getMedicalCondition() {
		return medicalCondition;
	}
	public void setMedicalCondition(String medicalCondition) {
		this.medicalCondition = medicalCondition;
	}
	public String getDietaryRestriction() {
		return dietaryRestriction;
	}
	public void setDietaryRestriction(String dietaryRestriction) {
		this.dietaryRestriction = dietaryRestriction;
	}
	public String getDietaryCustom() {
		return dietaryCustom;
	}
	public void setDietaryCustom(String dietaryCustom) {
		this.dietaryCustom = dietaryCustom;
	}
	public String getPregnantStatus() {
		return pregnantStatus;
	}
	public void setPregnantStatus(String pregnantStatus) {
		this.pregnantStatus = pregnantStatus;
	}
	public String getReferralCode() {
		return referralCode;
	}
	public void setReferralCode(String referralCode) {
		this.referralCode = referralCode;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getUserType() {
		return userType;
	}
	public void setUserType(String userType) {
		this.userType = userType;
	}
	public String getFriendsReferralCode() {
		return friendsReferralCode;
	}
	public void setFriendsReferralCode(String friendsReferralCode) {
		this.friendsReferralCode = friendsReferralCode;
	}
	public boolean isApproved() {
		return isApproved;
	}
	public void setApproved(boolean isApproved) {
		this.isApproved = isApproved;
	}
	public Groups getGroupsId() {
		return groupsId;
	}
	public void setGroupsId(Groups groupsId) {
		this.groupsId = groupsId;
	}
	
	
	
	
	@Override
	public String toString() {
		return "User [userId=" + userId + ", fullname=" + fullname + ", age=" + age + ", gender=" + gender + ", mobile="
				+ mobile + ", email=" + email + ", address=" + address + ", city=" + city + ", state=" + state
				+ ", country=" + country + ", pincode=" + pincode + ", height=" + height + ", weight=" + weight
				+ ", bmi=" + bmi + ", reason=" + reason + ", medicalCondition=" + medicalCondition
				+ ", dietaryRestriction=" + dietaryRestriction + ", dietaryCustom=" + dietaryCustom
				+ ", pregnantStatus=" + pregnantStatus + ", referralCode=" + referralCode + ", password=" + password
				+ ", userType=" + userType + ", friendsReferralCode=" + friendsReferralCode + ", isApproved="
				+ isApproved + ", groupsId=" + groupsId + "]";
	}
	public User() {
		
	}
	
	
}
