package com.fitme.service;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

import com.fitme.model.Batch;
import com.fitme.model.Groups;

public interface BatchService {

	List<Batch> findAllBatches();

	Collection<Groups> findAllGroupsOfABatch(String batchId);

	Optional<Batch> findBatchById(String batchId);

	String findIfBatchExpired(String batchId);
	
	
	

}
