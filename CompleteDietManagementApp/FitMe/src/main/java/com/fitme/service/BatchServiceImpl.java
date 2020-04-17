package com.fitme.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fitme.Repo.BatchRepo;
import com.fitme.constant.Constant;
import com.fitme.model.Batch;
import com.fitme.model.Groups;

@Service
public class BatchServiceImpl implements BatchService {
	
	@Autowired
	BatchRepo batchRepo;

	@Override
	public List<Batch> findAllBatches() {
		List<Batch> batches = new ArrayList<Batch>();
			this.batchRepo.findAll().forEach((batch)->{
			batches.add(batch);
		});
	return batches;
	}

	@Override
	public Set<Groups> findAllGroupsOfABatch(String batchId) {
		return this.batchRepo.findById(batchId).get().getGroups();
	}

	@Override
	public Optional<Batch> findBatchById(String batchId) {
		return this.batchRepo.findById(batchId);
	}

	@Override
	public String findIfBatchExpired(String batchId) {
		LocalDate endDate = this.batchRepo.findBatchEndDate(batchId);
		if(LocalDate.now().isAfter(endDate)){
			return Constant.BATCH_STATUS_EXPIRED;
		}
		return Constant.BATCH_STATUS_ACTIVE;
	}

	
}