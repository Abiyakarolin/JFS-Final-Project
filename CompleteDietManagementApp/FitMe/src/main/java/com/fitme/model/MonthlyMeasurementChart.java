package com.fitme.model;

import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;

import com.fitme.model.keys.MonthlyMeasurementChartCompositeKey;

@Entity
public class MonthlyMeasurementChart {
	
	@EmbeddedId
	private MonthlyMeasurementChartCompositeKey id;
	
	@Column(scale=2)
	private BigDecimal height;
	
	@Column(scale=2)
    private BigDecimal weight;
	
	@Column(scale=2)
    private BigDecimal chest;
	
	@Column(scale=2)
	private BigDecimal waist;
	
	@Column(scale=2)
    private BigDecimal shoulder;
	
	@Column(scale=2)
	private BigDecimal biceps;
	
	@Column(scale=2)
    private BigDecimal forearm;
	
	@Column(scale=2)
	private BigDecimal leg;
	
	@Column(scale=2)
    private BigDecimal thighs;
	
	@Column(scale=2)
    private BigDecimal bmi;

	public MonthlyMeasurementChart() {
		
	}

	public MonthlyMeasurementChartCompositeKey getId() {
		return id;
	}

	public void setId(MonthlyMeasurementChartCompositeKey id) {
		this.id = id;
	}

	public BigDecimal getHeight() {
		return height;
	}

	public void setHeight(BigDecimal height) {
		this.height = height;
	}

	public BigDecimal getWeight() {
		return weight;
	}

	public void setWeight(BigDecimal weight) {
		this.weight = weight;
	}

	public BigDecimal getChest() {
		return chest;
	}

	public void setChest(BigDecimal chest) {
		this.chest = chest;
	}

	public BigDecimal getWaist() {
		return waist;
	}

	public void setWaist(BigDecimal waist) {
		this.waist = waist;
	}

	public BigDecimal getShoulder() {
		return shoulder;
	}

	public void setShoulder(BigDecimal shoulder) {
		this.shoulder = shoulder;
	}

	public BigDecimal getBiceps() {
		return biceps;
	}

	public void setBiceps(BigDecimal biceps) {
		this.biceps = biceps;
	}

	public BigDecimal getForearm() {
		return forearm;
	}

	public void setForearm(BigDecimal forearm) {
		this.forearm = forearm;
	}

	public BigDecimal getLeg() {
		return leg;
	}

	public void setLeg(BigDecimal leg) {
		this.leg = leg;
	}

	public BigDecimal getThighs() {
		return thighs;
	}

	public void setThighs(BigDecimal thighs) {
		this.thighs = thighs;
	}

	public BigDecimal getBmi() {
		return bmi;
	}

	public void setBmi(BigDecimal bmi) {
		this.bmi = bmi;
	}
	
	
	
	

}
